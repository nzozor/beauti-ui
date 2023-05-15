import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-boutique-summary',
  templateUrl: './boutique-summary.component.html',
  styleUrls: ['./boutique-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoutiqueSummaryComponent {
  sendGtaData() {
    // @ts-ignore
    gtag('event', 'button clicks', {
      'event_category' : 'homepage',
      'event_label' : 'view treatment'
    });
  }
}
