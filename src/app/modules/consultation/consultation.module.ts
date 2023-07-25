import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConsultationRoutingModule} from './consultation-routing.module';
import {ConsultationComponent} from './consultation/consultation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BypassHtmlSecurityPipe} from "../../shared/pipe/bypass-html-security.pipe";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    ConsultationComponent,
    BypassHtmlSecurityPipe
  ],
  imports: [
    CommonModule,
    ConsultationRoutingModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class ConsultationModule {
}
