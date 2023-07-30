import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-treatment-price',
  templateUrl: './treatment-price.component.html',
  styleUrls: ['./treatment-price.component.scss']
})
export class TreatmentPriceComponent implements OnInit {
  @Input() data: any;

  constructor() {
  }

  ngOnInit(): void {
  }
}
