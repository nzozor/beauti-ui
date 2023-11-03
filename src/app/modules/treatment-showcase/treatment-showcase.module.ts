import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreatmentShowcaseComponent} from './treatment-showcase/treatment-showcase.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MarkdownToHtmlPipe} from '@pipes/markdown-to-html/markdown-to-html.pipe';

const routes: Routes = [
  {
    path: '',
    component: TreatmentShowcaseComponent
  }
];

@NgModule({
  declarations: [TreatmentShowcaseComponent,
    MarkdownToHtmlPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class TreatmentShowcaseModule {
}
