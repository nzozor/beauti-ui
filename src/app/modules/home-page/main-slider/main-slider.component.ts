import {CommonModule, isPlatformBrowser, NgOptimizedImage} from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Inject,
  Output,
  PLATFORM_ID
} from '@angular/core';
import {Observable} from 'rxjs';
import {HomePageSlider} from 'src/app/shared/models/homepageSlider.model';
import {BookingService} from 'src/app/shared/services/booking.service';
import {DataService} from 'src/app/shared/services/data.service';
import {register} from 'swiper/element/bundle';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, NgOptimizedImage, MatButtonModule, RouterModule],
  standalone: true
})
export class MainSliderComponent implements AfterViewInit {
  @Output() bookTreatment = new EventEmitter<boolean>();

  slideConfig = {
    slidesToShow: 1, slidesToScroll: 1, dots: true,
    infinite: true,
    adaptiveHeight: true,
    focusOnSelect: false,
    touchThreshold: 1000,
    autoplay: false,
    speed: 2500,
    fade: true,
  };

  homageBanners$ = this.getBanners();

  constructor(private dataService: DataService, private bookingService: BookingService, @Inject(PLATFORM_ID) private platformId: any) {
    register();
  }

  get cmsUrl() {
    return this.dataService.beautiCmsUrl;
  }

  ngAfterViewInit() {
    this.homageBanners$.subscribe(() => {
      const swiperEl = document.querySelector('swiper-container');

      const params = {
        injectStyles: [
          `
          @media (min-width: 768px) {
            .swiper-pagination {
              scale: 1.5
            }
         
          }
         
           .swiper-pagination-bullet-active {
            background: white;
          }
        `,
        ],
      };

      Object.assign(swiperEl, params);

      swiperEl.initialize();
    })
  }

  getBanners(): Observable<HomePageSlider[]> {
    return this.dataService.getServerTimeThenBanner();
  }

  openBooking(): void {
    this.bookingService.sendBooking();
  }

  getBackGroudImg(imgLarge: string, imgSmall: string): string {
    if (isPlatformBrowser(this.platformId) && window.innerWidth > 768) {
      return `url('${this.cmsUrl}${imgLarge}')`;
    } else {
      return `url('${this.cmsUrl}${imgSmall}')`;
    }
  }

  getBackGroudImgRaw(imgLarge: string, imgSmall: string): string {
    if (isPlatformBrowser(this.platformId) && window.innerWidth > 768) {
      return `${this.cmsUrl}${imgLarge}`;
    } else {
      return `${this.cmsUrl}${imgSmall}`;
    }
  }
}
