import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../../shared/services/data.service";

@Component({
  selector: 'app-treatment-info',
  templateUrl: './treatment-info.component.html',
  styleUrls: ['./treatment-info.component.scss']
})
export class TreatmentInfoComponent implements OnInit {
  @Input() data: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  goToTreatmentShowcase(treatmentParentList: string[], treatmentName: string): void {
    this.dataService.activeTreatmentList = treatmentParentList;
  }

}
