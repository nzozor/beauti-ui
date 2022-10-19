import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { SeoService } from 'src/app/shared/services/seo.service';

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
})
export class AboutUsComponent {

  slideConfig: SlideConf = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
          centerMode: true,
          variableWidth: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,

          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  };

  slides = [
    {img: 'assets/cinzia-campigotto-1.jpg' },
    {img: 'assets/cinzia-campigotto-2.jpg' },
    {img: 'assets/cinzia-campigotto-3.jpg' },
  ];

  constructor(private dataService: DataService, private seo: SeoService ) {
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

  aboutUs$: Observable<any> =  this.dataService.getAboutUsPage();
}
