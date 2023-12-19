import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {HomePageComponent} from './home-page.component';
import {HomePageRoutingModule} from './home-page.routing.module';
import {ExcluStocklistComponent} from './exclu-stocklist/exclu-stocklist.component';
import {JumbotronComponent} from './jumbotron/jumbotron.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {MatIconModule} from '@angular/material/icon';
import {MapComponent} from 'src/app/shared/components/map/map.component';
import {QuoteComponent} from 'src/app/shared/components/svg/quote/quote.component';
import {ArrowComponent} from 'src/app/shared/components/svg/arrow/arrow.component';
import {LazyImgDirective} from 'src/app/shared/directives/lazy-img.directive';
import {MainSliderComponent} from './main-slider/main-slider.component';
import {BoutiqueSummaryComponent} from './boutique-summary/boutique-summary.component';
import {PopularTreatmentComponent} from './popular-treatment/popular-treatment.component';
import {SlickCarouselModule} from "ngx-slick-carousel";

@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MatIconModule,
    MatButtonModule,
    SlickCarouselModule,
    NgOptimizedImage
  ],
  declarations: [
    HomePageComponent,
    ExcluStocklistComponent,
    JumbotronComponent,
    ReviewsComponent,
    MapComponent,
    QuoteComponent,
    ArrowComponent,
    LazyImgDirective,
    MainSliderComponent,
    BoutiqueSummaryComponent,
    PopularTreatmentComponent,

  ],
  exports: [MapComponent]
})

export class HomePageModule {
}
