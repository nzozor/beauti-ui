import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'treatments',
    loadChildren: () => import('./modules/treatments/treatments.module').then(m => m.TreatmentsModule)
  },
  {
    path: 'consultation',
    loadChildren: () => import('./modules/consultation/consultation.module').then(m => m.ConsultationModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./modules/about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', relativeLinkResolution: 'corrected' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
