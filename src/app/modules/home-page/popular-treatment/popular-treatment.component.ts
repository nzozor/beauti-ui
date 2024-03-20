import {Component, OnInit} from '@angular/core';
import {SlideConf} from "../../../shared/utils/slider-config";

@Component({
  selector: 'app-popular-treatment',
  templateUrl: './popular-treatment.component.html',
  styleUrls: ['./popular-treatment.component.scss'],
})
export class PopularTreatmentComponent implements OnInit {

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
  slides: any = [
    {url: 'assets/feature-img/Bazaar_Logo.svg.png'},
    {url: 'assets/feature-img/hello.png'},
    {url: 'assets/feature-img/mailonline-vector-logo.png'},
    {url: 'assets/feature-img/metro-co-uk-logo-vector.png'},
    {url: 'assets/feature-img/The_Sun.svg.png'},
  ];

  slideStyles = {
    maxWidth: '855px',
    margin: 'auto',
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
