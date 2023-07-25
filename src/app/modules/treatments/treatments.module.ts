import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

import {TreatmentsRoutingModule} from './treatments-routing.module';
import {TreatmentsComponent} from './treatments/treatments.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {TreatmentShowcaseModule} from '../treatment-showcase/treatment-showcase.module';
import {SectionHostDirective} from "./section-host.directive";
import { TreatmentSectionComponent } from './treatment-section/treatment-section.component';
import { TreatmentHostDirective } from './treatment-host.directive';
import { TreatmentPriceComponent } from './treatment-price/treatment-price.component';

@NgModule({
  declarations: [TreatmentsComponent, SectionHostDirective, SectionHostDirective, TreatmentSectionComponent, TreatmentHostDirective, TreatmentPriceComponent],
  imports: [
    CommonModule,
    TreatmentsRoutingModule,
    MatExpansionModule,
    MatTableModule,
    MatButtonModule,
    TreatmentShowcaseModule
  ]
})
export class TreatmentsModule {
}
