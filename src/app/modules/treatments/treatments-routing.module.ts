import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreatmentsComponent } from './treatments/treatments.component';

const routes: Routes = [
  {
    path: '',
    component: TreatmentsComponent
  },
  {
    path: ':slug',
    loadChildren: () => import('../treatment-showcase/treatment-showcase.module').then(m => m.TreatmentShowcaseModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreatmentsRoutingModule { }
