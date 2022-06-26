import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TreatwellComponent } from './components/treatwell/treatwell.component';
import { BookingService } from './shared/services/booking.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'beauti-frontend';
  stickyHeader = false;
  loadingRouteConfig = false;
  constructor(
    private router: Router,
    private bookingService: BookingService,
    public dialog: MatDialog,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {
  }
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if ((event instanceof NavigationEnd) && isPlatformBrowser(this.platformId)) {
        window.scrollTo(0, 0);
      }
      if (event instanceof RouteConfigLoadStart) {
          this.loadingRouteConfig = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.loadingRouteConfig  = false;
      }
    });

  }
  setStickyHeader(value: boolean): void {
    this.stickyHeader = value;
  }

  private openBookingModal() {
    this.dialog.open(
      TreatwellComponent,
      {
        height: '800px',
        width: '1100px',
        panelClass: 'custom-dialog-container'
      },
    );
  }
}
