import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-treatment-section',
  templateUrl: './treatment-section.component.html',
  styleUrls: ['./treatment-section.component.scss']
})
export class TreatmentSectionComponent implements OnInit {

  @Input() data: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log('test treatment section')
  }


}
