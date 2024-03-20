import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {ContactRoutingModule} from './contact-routing.module';
import {ContactComponent} from './contact/contact.component';
import {HomePageModule} from '../home-page/home-page.module';
import {ImageShowcaseComponent} from "../../components/image-showcase/image-showcase.component";

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    HomePageModule,
    NgOptimizedImage,
    ImageShowcaseComponent
  ]
})
export class ContactModule {
}
