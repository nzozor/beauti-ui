import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContactRoutingModule} from './contact-routing.module';
import {ContactComponent} from './contact/contact.component';
import {HomePageModule} from '../home-page/home-page.module';
import {SlickCarouselModule} from "ngx-slick-carousel";

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    HomePageModule,
    SlickCarouselModule
  ]
})
export class ContactModule {
}
