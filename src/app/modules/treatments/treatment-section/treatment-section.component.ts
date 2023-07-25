import {Component, ComponentRef, Input, OnInit, ViewChild} from '@angular/core';
import {SectionHostDirective} from "../section-host.directive";

@Component({
  selector: 'app-treatment-section',
  templateUrl: './treatment-section.component.html',
  styleUrls: ['./treatment-section.component.scss']
})
export class TreatmentSectionComponent implements OnInit {

  @Input() data: any;
  @ViewChild(SectionHostDirective, {static: true}) sectionHostDirective!: SectionHostDirective;

  constructor() {
  }

  ngOnInit(): void {
    this.loadComponents();
  }

  loadComponents() {
    const viewContainerRef = this.sectionHostDirective.viewContainerRef;
    viewContainerRef.clear();
    if (this.data?.subTreatment?.length > 0) {
      this.data.forEach(componentData => {
        const componentRef: ComponentRef<any> = viewContainerRef.createComponent<TreatmentSectionComponent>(componentData.type);
        componentRef.instance.data = componentData.data;
      });
    }
  }
}
