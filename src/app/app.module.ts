import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
import { HeaderNavComponent } from './components/header-nav/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { BeautiLogoComponent } from './components/beauti-logo/beauti-logo.component';
import { MenuLinkComponent } from './components/menu-link/menu-link.component';
import { MatIconModule } from '@angular/material/icon';
import { HomePageModule } from './modules/home-page/home-page.module';
import { TreatmentsModule } from './modules/treatments/treatments.module';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FooterComponent } from './components/footer/footer.component';
import { InstaComponent } from './shared/components/svg/insta/insta.component';

@NgModule({
  declarations: [
    AppComponent,
    BurgerMenuComponent,
    HeaderNavComponent,
    BeautiLogoComponent,
    MenuLinkComponent,
    FooterComponent,
    InstaComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }), // Configures a browser-based app to transition from a server-rendered app, if one is present on the page.
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    HomePageModule,
    TreatmentsModule,
    RouterModule,
    MatProgressSpinnerModule,
    HammerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
