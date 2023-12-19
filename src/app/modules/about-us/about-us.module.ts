import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {AboutUsRoutingModule} from './about-us-routing.module';
import {AboutUsComponent} from './about-us/about-us.component';
import {HomePageModule} from '../home-page/home-page.module';
import {SlickCarouselModule} from "ngx-slick-carousel";

@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    HomePageModule,
    SlickCarouselModule,
    NgOptimizedImage
  ]
})
export class AboutUsModule {
}
