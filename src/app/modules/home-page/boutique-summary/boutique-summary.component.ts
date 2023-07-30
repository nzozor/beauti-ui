import {ChangeDetectionStrategy, Component} from '@angular/core';
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

  sendGtaData(eventLabel: string, eventCategory = 'homepage', event = 'button clicks') {
    // @ts-ignore
    gtag('event', event, {
      'event_category': eventCategory,
      'event_label': eventLabel
    });
  }

  openBooking(): void {
    this.bookingService.sendBooking();
  }
}
