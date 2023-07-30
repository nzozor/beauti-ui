import {
  AfterContentChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {SKIN_TREATMENTS} from '../mocks/skin-treatments';
import {SKIN_IMP_REM} from '../mocks/skin-imperfections';
import {WAX_DATA} from '../mocks/waxing';
import {BODY_CONTOURING, BODY_MASSAGE} from '../mocks/body';
import {BEAUTY_FACIAL, BEAUTY_NAIL} from '../mocks/beauty';
import {HAIR_REMOVAL_ELECTRO, HAIR_REMOVAL_IPL_LASER} from '../mocks/hair-removal';
import {ActivatedRoute, Router} from '@angular/router';
import {BookingService} from 'src/app/shared/services/booking.service';
import {DataService} from 'src/app/shared/services/data.service';
import {isPlatformBrowser, ViewportScroller} from '@angular/common';
import {SeoService} from 'src/app/shared/services/seo.service';
import {AESTHETIC_TREATMENTS} from '../mocks/aesthetic-treatments';
import {TreatmentSectionComponent} from "../treatment-section/treatment-section.component";
import {TreatmentPriceComponent} from "../treatment-price/treatment-price.component";

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
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
  componentDataArray = [
    {
      type: TreatmentSectionComponent,
      data: {
        subTreatment: [{type: TreatmentSectionComponent}, {type: TreatmentSectionComponent}, {type: TreatmentPriceComponent}, {type: TreatmentPriceComponent}],
      }
    },
    {type: TreatmentSectionComponent},
    {type: TreatmentSectionComponent},
    // Add more objects as needed for other components
  ];

  // @ViewChild(SectionHostDirective, {static: true}) sectionHostDirective!: SectionHostDirective;
  @ViewChild('container', {read: ViewContainerRef, static: true}) container: ViewContainerRef;

  sections = {};

  constructor(
    private bookingService: BookingService,
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
    private viewPortScroller: ViewportScroller,
    @Inject(PLATFORM_ID) private platformId: any,
    private seo: SeoService) {
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
    this.innerWidth = isPlatformBrowser(this.platformId) ? window.innerWidth : 0;
    this.activeParrentTreatment = this.dataService.currentParentTreatment;
    this.activeTreatmentList = this.dataService.activeTreatmentList;
    this.activeTreatment = this.dataService.activeTreatment;
    this.setSeo();

    // this.dataService.getTreatmentSections().subscribe(sections => {
    //   this.sections = sections;
    //   this.loadComponents()
    // });

    this.dataService.getFullTreatmentHierarchy().subscribe(full => {
      this.sections = full;
      this.loadComponents();
      console.log('zip result output', full);
    })
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

  loadComponents() {

    this.container.clear();
    Object.keys(this.sections).forEach(section => {
      const componentRef: ComponentRef<any> = this.container.createComponent<TreatmentSectionComponent>(this.sections[section].type);
      componentRef.instance.data = {
        subSections: this.sections[section].subSections,
        subPrices: this.sections[section].subPrices,
        subTreatments: this.sections[section].subTreatments
      };
      console.log(this.sections[section].subSections)
    });
  }
}
