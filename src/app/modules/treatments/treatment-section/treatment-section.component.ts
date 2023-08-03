import {Component, Input, OnInit} from '@angular/core';
import {BookingService} from "../../../shared/services/booking.service";

@Component({
  selector: 'app-treatment-section',
  templateUrl: './treatment-section.component.html',
  styleUrls: ['./treatment-section.component.scss']
})
export class TreatmentSectionComponent implements OnInit {

  @Input() data: any;

  constructor(private bookingService: BookingService) {
  }

  ngOnInit(): void {
    console.log('test treatment section')
  }

  openBooking(e, treatment = null): void {
    this.bookingService.sendBooking();
  }
}
