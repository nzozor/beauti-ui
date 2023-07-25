import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from 'src/app/shared/services/data.service';
import {SeoService} from 'src/app/shared/services/seo.service';
import {SLIDE_CONFIG, slideConfig} from "../../../shared/utils/slider-config";

export interface SlideConf {
  slidesToShow: number;
  slidesToScroll: number;
  centerMode: boolean;
  responsive: { breakpoint: number, settings: {} }[]
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: SLIDE_CONFIG, useValue: slideConfig}]

})
export class AboutUsComponent {

  slides = [
    {img: 'assets/consultation/cinzia-beauti-consultation-1.jpg'},
    {img: 'assets/consultation/cinzia-beauti-consultation-2.jpg'},
    {img: 'assets/consultation/cinzia-beauti-consultation-3.jpg'},
  ];
  aboutUs$: Observable<any> = this.dataService.getAboutUsPage();

  constructor(private dataService: DataService, private seo: SeoService, @Inject(SLIDE_CONFIG) public slideConfig: SlideConf) {
    this.seo.setDefaultMeta();
    this.setSeo();
  }

  setSeo(): void {
    const pageTitle = 'About Page';
    this.seo.setTitle(
      pageTitle
    );
    this.seo.setMeta([{
      name: 'description',
      content: `${pageTitle} | ${this.seo.defaultMetaContent}`,
    }]);
  }
}
