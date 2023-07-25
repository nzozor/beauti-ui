import {Component, OnInit} from '@angular/core';
import {SlideConf} from "../../../shared/utils/slider-config";

@Component({
  selector: 'app-popular-treatment',
  templateUrl: './popular-treatment.component.html',
  styleUrls: ['./popular-treatment.component.scss']
})
export class PopularTreatmentComponent implements OnInit {

  slideConfig: SlideConf = {
    slidesToShow: 4,
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
    {img: 'assets/feature-img/Bazaar_Logo.svg.png'},
    {img: 'assets/feature-img/mailonline-vector-logo.png'},
    {img: 'assets/feature-img/metro-co-uk-logo-vector.png'},
    {img: 'assets/feature-img/The_Sun.svg.png'},

  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
