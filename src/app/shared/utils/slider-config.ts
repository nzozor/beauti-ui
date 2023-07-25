import {InjectionToken} from "@angular/core";

export interface SlideConf {
  slidesToShow: number;
  slidesToScroll: number;
  centerMode: boolean;
  responsive: { breakpoint: number, settings: {} }[]
}

export const slideConfig: SlideConf = {
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

export const SLIDE_CONFIG =
  new InjectionToken<SlideConf>('slide-config')
