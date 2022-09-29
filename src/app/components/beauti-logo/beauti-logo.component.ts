import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-beauti-logo',
  templateUrl: './beauti-logo.component.html',
  styleUrls: ['./beauti-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeautiLogoComponent implements OnInit {
  public fill =  '#000';
  @Input() sticky = false;
  constructor() { }

  ngOnInit() {
  }

}
