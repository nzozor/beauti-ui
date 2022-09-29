import { Inject, Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookNow = new Subject<boolean>();

  constructor (@Inject(DOCUMENT) private document: Document) {}


  sendBooking(): void {
    window.open('https://widget.treatwell.co.uk/place/beauti-skin-clinic/', '_blank', 'noopener');
  }

  sendBookingBespoke(): void {
    window.open('mailto:info@beautiskinclinic.com?subject=Beauti Skin Clinic Booking', '_blank', 'noopener');
  }

  getBooking(): Observable<boolean> {
    return this.bookNow.asObservable();
  }
}
