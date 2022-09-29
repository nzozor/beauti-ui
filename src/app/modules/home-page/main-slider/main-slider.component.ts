import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { HomePageSlider } from 'src/app/shared/models/homepageSlider.model';
import { BookingService } from 'src/app/shared/services/booking.service';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainSliderComponent {
  banners;
  isMobile: boolean;
  testClass: any = {
    backgroundColor: 'red'
  };

  slideConfig = {
    slidesToShow: 1, slidesToScroll: 1, dots: true,
    infinite: true,
    adaptiveHeight: false,
    focusOnSelect: false,
    touchThreshold: 1000,
    autoplay: true,
    speed: 2500,
    fade: true,
  };

  homageBanners$ = this.getBanners();

  constructor(private dataService: DataService, private bookingService: BookingService, @Inject(PLATFORM_ID) private platformId: any) { }

  get cmsUrl() {
    return this.dataService.beautiCmsUrl;
  }

  getBanners(): Observable<HomePageSlider> {
    return this.dataService.getHomageBanners();
  }

  openBooking(event): void {
    this.bookingService.sendBooking();
  }

  getBackGroudImg(imgLarge: string, imgSmall: string): string {
    if (isPlatformBrowser(this.platformId) && window.innerWidth > 768) {
      return `url('${this.cmsUrl}${imgLarge}')`;
    } else {
      return `url('${this.cmsUrl}${imgSmall}')`;
    }
  }
}
