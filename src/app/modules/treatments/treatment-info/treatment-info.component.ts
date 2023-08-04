import {Component, Input} from '@angular/core';
import {DataService} from "../../../shared/services/data.service";

@Component({
  selector: 'app-treatment-info',
  templateUrl: './treatment-info.component.html',
  styleUrls: ['./treatment-info.component.scss']
})
export class TreatmentInfoComponent {
  @Input() data: any;

  constructor(private dataService: DataService) {
  }


  goToTreatmentShowcase(treatmentParentList: string[], treatmentName: string): void {
    this.dataService.activeTreatmentList = treatmentParentList;
  }

}
