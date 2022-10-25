import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { SeoService } from './shared/services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'beauti-frontend';
  stickyHeader = false;
  loadingRouteConfig = false;
  private window: Window;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(DOCUMENT) private document: Document,
    private seoService: SeoService
  ) {
    this.window = this.document.defaultView;
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if ((event instanceof NavigationEnd) && isPlatformBrowser(this.platformId)) {
        this.window.scrollTo(0, 0);
      }
      if (event instanceof RouteConfigLoadStart) {
        this.loadingRouteConfig = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.loadingRouteConfig = false;
      }
    });

    this.createLinkForCanonicalURL();
  }

  setStickyHeader(value: boolean): void {
    this.stickyHeader = value;
  }

  createLinkForCanonicalURL() {
    this.seoService.createLinkForCanonicalURL();
  }
}
