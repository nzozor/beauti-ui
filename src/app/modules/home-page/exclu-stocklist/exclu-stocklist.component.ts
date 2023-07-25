import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SlideConf} from "../../../shared/utils/slider-config";

@Component({
  selector: 'app-exclu-stocklist',
  templateUrl: './exclu-stocklist.component.html',
  styleUrls: ['./exclu-stocklist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class ExcluStocklistComponent {

  slideConfig: SlideConf = {
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
          centerMode: true,
          variableWidth: true,
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 1200,

        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,

          arrows: false,
          centerMode: true,
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 1200,

        }
      }
    ]
  };
  slides = [
    {img: 'assets/exclu-stockist/Group 300.png'},
    {img: 'assets/exclu-stockist/Group 301.png'},
    {img: 'assets/exclu-stockist/Group 302.png'},
    {img: 'assets/exclu-stockist/Group 303.png'},
    {img: 'assets/exclu-stockist/Group 304.png'},

  ];
}
