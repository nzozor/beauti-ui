import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from 'src/app/shared/services/data.service';
import {SeoService} from 'src/app/shared/services/seo.service';
import {SLIDE_CONFIG, slideConfig} from "../../../shared/utils/slider-config";
import {ICarouselImg} from "../../../components/image-showcase/image-showcase.component";

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
  images: ICarouselImg[] = [
    {url: 'assets/consultation/cinzia-beauti-consultation-1.jpg', alt: 'Beauti Skin Clinic Founder Cinzia Campigotto'},
    {url: 'assets/consultation/cinzia-beauti-consultation-2.jpg', alt: 'Beauti Skin Clinic Founder Cinzia Campigotto'},
    {url: 'assets/consultation/cinzia-beauti-consultation-3.jpg', alt: 'Beauti Skin Clinic Founder Cinzia Campigotto'},
  ];
  aboutUs$: Observable<any> = this.dataService.getAboutUsPage();

  constructor(private dataService: DataService, private seo: SeoService, @Inject(SLIDE_CONFIG) public slideConfig: SlideConf) {
    this.seo.setDefaultMeta();
    this.setSeo();
  }

  setSeo(): void {
    const pageTitle = 'About Us | Aesthetic and Skin Specialist in South London';
    this.seo.setTitle(
      pageTitle
    );
    this.seo.setMeta([{
      name: 'description',
      content: `Top-rated Beauti Skin Clinic in South London, serving Oval, Brixton, Kennington, Vauxhall, Stockwell and Clapham`,
    }]);
  }
}
