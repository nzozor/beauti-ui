import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HomePageComponent {
  title = 'beauti-frontend';
  stickyHeader = false;
  imgUrl = 'assets/beauti-nail-skin.jpg';

  constructor(@Inject(DOCUMENT) private document: Document, private seo: SeoService ) { 
    this.seo.setDefaultMeta();
  }
  
  setStickyHeader(value: boolean): void {
    this.stickyHeader = value;
  }
}
