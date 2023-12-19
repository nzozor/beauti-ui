import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-beauti-logo',
  templateUrl: './beauti-logo.component.html',
  styleUrls: ['./beauti-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeautiLogoComponent {
  public fill = '#000';
  @Input() sticky = false;


}
