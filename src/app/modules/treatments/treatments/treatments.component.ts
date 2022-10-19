import { Component, OnInit, AfterViewInit, AfterContentChecked, Inject, ChangeDetectionStrategy } from '@angular/core';
import { SKIN_TREATMENTS } from '../mocks/skin-treatments';
import { SKIN_IMP_REM } from '../mocks/skin-imperfections';
import { WAX_DATA } from '../mocks/waxing';
import { BODY_MASSAGE, BODY_CONTOURING } from '../mocks/body';
import { BEAUTY_NAIL, BEAUTY_FACIAL } from '../mocks/beauty';
import { HAIR_REMOVAL_IPL_LASER, HAIR_REMOVAL_ELECTRO } from '../mocks/hair-removal';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/shared/services/booking.service';
import { DataService } from 'src/app/shared/services/data.service';
import { ViewportScroller } from '@angular/common';
import { PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from 'src/app/shared/services/seo.service';
import { AESTHETIC_TREATMENTS } from '../mocks/aesthetic-treatments';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreatmentsComponent implements OnInit, AfterViewInit, AfterContentChecked {
  skinTreatments: any[] = SKIN_TREATMENTS;
  skinImperfectionRemoval: any[] = SKIN_IMP_REM;
  waxing: any[] = WAX_DATA;
  bodyRelaxingMassage: any[] = BODY_MASSAGE;
  bodyContouring: any[] = BODY_CONTOURING;
  beautyFacial: any[] = BEAUTY_FACIAL;
  beautyNail: any[] = BEAUTY_NAIL;
  hairRemoveLaser: {} = HAIR_REMOVAL_IPL_LASER;
  hairRemoveElectro: any[] = HAIR_REMOVAL_ELECTRO;
  aestheticTreatments: any[] = AESTHETIC_TREATMENTS
  innerWidth: any;
  leftCol: [];
  rightCol: [];
  activeTreatment: string;
  activeParrentTreatment: string;
  activeTreatmentList: string[];
  scrollAdjusted: boolean;

  constructor(
    private bookingService: BookingService,
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
    private viewPortScroller: ViewportScroller,
    @Inject(PLATFORM_ID) private platformId: any,
    private seo: SeoService ) {
      this.seo.setDefaultMeta();
    }

  get isWideScreen(): boolean {
    return this.innerWidth >= 600;
  }

  openBooking(e, treatment = null): void {
    if (treatment?.bespoke) {
      this.bookingService.sendBookingBespoke();
    } else {
      this.bookingService.sendBooking();
    }
  }

  ngOnInit(): void {
    this.leftCol = this.waxing[0].options.slice(0, Math.ceil(this.waxing[0].options.length / 2));
    this.rightCol = this.waxing[0].options.slice(Math.ceil(this.waxing[0].options.length / 2));
    this.innerWidth = isPlatformBrowser(this.platformId) ? window.innerWidth: 0;
    this.activeParrentTreatment = this.dataService.currentParentTreatment;
    this.activeTreatmentList = this.dataService.activeTreatmentList;
    this.activeTreatment = this.dataService.activeTreatment;
    this.setSeo();
  }

  ngAfterViewInit(): void {
    if (this.activeTreatment) {
      this.viewPortScroller.scrollToAnchor(this.activeTreatment);

    } else {
      this.viewPortScroller.scrollToAnchor(this.activeParrentTreatment);
    }
  }

  ngAfterContentChecked(): void {
    if (this.viewPortScroller.getScrollPosition()[1] && !this.scrollAdjusted) {
      this.viewPortScroller.scrollToPosition(
        [this.viewPortScroller.getScrollPosition()[0],
        this.viewPortScroller.getScrollPosition()[1] - 80]
      );
      this.scrollAdjusted = true;
    }
  }

  setSeo(): void {
    const pageTitle = 'Treatments Page';
    this.seo.setTitle(
      pageTitle
    );
    this.seo.setMeta([{
      name: 'description',
      content: `${pageTitle} | ${this.seo.defaultMetaContent}`,
    }]);
  }

  goToTreatmentShowcase(treatmentParentList: string[], treatmentName: string): void {
    this.dataService.activeTreatmentList = treatmentParentList;
    this.dataService.activeTreatment = this.getSlug(treatmentName);
  }

  getSlug(treatmentName: string): string {
    return treatmentName.split(' ').join('-').split('/').join('');
  }

  isActive(treatment): boolean {
    if (this.activeTreatmentList) {
      return !!this.activeTreatmentList.find(treat => this.getSlug(treat) === this.getSlug(treatment));
    } else {
      return false;
    }
  }
}
