import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BookingService } from 'src/app/shared/services/booking.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JumbotronComponent {

  constructor(private bookingService: BookingService) { }

  openBooking(event) {
    this.bookingService.sendBooking();
  }
}
