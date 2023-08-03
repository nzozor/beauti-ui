import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SlideConf} from "../../../shared/utils/slider-config";

@Component({
  selector: 'app-exclu-stocklist',
  templateUrl: './exclu-stocklist.component.html',
  styleUrls: ['./exclu-stocklist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ExcluStocklistComponent implements OnInit {

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
    {img: 'assets/exclu-stockist/dermapen_logo.png', url: 'https://dermapen.com/'},
    {img: 'assets/exclu-stockist/logo+cosmelan.png', url: 'https://www.mesoestetic.co.uk/cosmelan-treatment.html'},
    {img: 'assets/exclu-stockist/Profhilo+blue+Logo+no+background.png', url: 'https://www.profhilo.co.uk/'},
    {img: 'assets/exclu-stockist/sterex.png', url: 'https://www.sterex.com/'},
    {img: 'assets/exclu-stockist/hayo\'u.png', url: 'https://hayoumethod.com/'},
    {img: 'assets/exclu-stockist/Jalupro.png', url: 'https://md.jalupro.com/?p=25'},
    {img: 'assets/exclu-stockist/Aqua3.png', url: ''}, // URL not provided for Aqua3
    {
      img: 'assets/exclu-stockist/Venus_Concept_Venus_Concept_Announces_Financial_Results_for_the.png',
      url: 'https://www.venusconcept.com/en-uk/'
    },
    {img: 'assets/exclu-stockist/sothys-logo.png', url: 'https://www.sothys.fr/en'},
    {img: 'assets/exclu-stockist/alumier-logo.png', url: 'https://www.alumiermd.co.uk/'},
  ];

  ngOnInit() {

  }
}
