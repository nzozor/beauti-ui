import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, ViewChild} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {register} from 'swiper/element/bundle';


export interface ICarouselImg {
  url: string;
  linkUrl: string;
  alt?: string;
  title?: string;
}

@Component({
  selector: 'logo-carousel',
  standalone: true,
  templateUrl: './logo-carousel.component.html',
  styleUrl: './image-showcase.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, NgOptimizedImage, MatButtonModule],
})
export class LogoCarouselComponent implements AfterViewInit {
  @Input() images: ICarouselImg[] = [];
  @Input() styles: any;
  @Input() gridRows: number = 1;
  @ViewChild('swiperRef') swiperRef: ElementRef;

  constructor() {
    register();
  }

  ngAfterViewInit() {
    this.swiperRef.nativeElement.setAttribute('grid-rows', this.gridRows);
    const params = {
      slidesToScroll: 1,
      gridRows: 2,
      slidesPerView: 3,
      infinite: true,
      adaptiveHeight: true,
      focusOnSelect: false,
      touchThreshold: 1000,
      autoplay: true,
      autoplayDelay: 2500,
      freeMode: true,
      fade: true,
      spaceBetween: 0,
      breakpoints: {
        0: {
          slidesPerView: 3,

        },
        768: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 5,
          autoplay: false,
          spaceBetween: 0,
          autoplayDelay: 2500,
        },
      },
      injectStyles: [
        `
          .swiper {
            
          }
        `,
      ],
    };

    Object.assign(this.swiperRef.nativeElement, params);

    this.swiperRef.nativeElement.initialize();
  }
}
