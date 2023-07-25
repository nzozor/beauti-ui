import {ChangeDetectionStrategy, Component, Inject, PLATFORM_ID} from '@angular/core';
import {BookingService} from "../../../shared/services/booking.service";

@Component({
  selector: 'app-boutique-summary',
  templateUrl: './boutique-summary.component.html',
  styleUrls: ['./boutique-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoutiqueSummaryComponent {

  constructor(private bookingService: BookingService) {
  }

  sendGtaData() {
    // @ts-ignore
    gtag('event', 'button clicks', {
      'event_category': 'homepage',
      'event_label': 'view treatment'
    });
  }

  openBooking(): void {
    this.bookingService.sendBooking();
  }
}
