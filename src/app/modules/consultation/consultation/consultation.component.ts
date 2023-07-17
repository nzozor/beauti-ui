import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DataService} from "../../../shared/services/data.service";
import {SeoService} from "../../../shared/services/seo.service";
import {Observable} from "rxjs";
import {FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultationComponent {

  consultationForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    contactNumber: ['', Validators.required],
    email: ['', Validators.email],
    message: ['', Validators.required],
    firstTimeCustomer: [''],
  });

  constructor(private dataService: DataService, private seo: SeoService,private fb: FormBuilder) {
    this.seo.setDefaultMeta();
    this.setSeo();
  }

  onFormSubmit() {

  }
  private setSeo(): void {
    const pageTitle = 'About Page';
    this.seo.setTitle(
      pageTitle
    );
    this.seo.setMeta([{
      name: 'description',
      content: `${pageTitle} | ${this.seo.defaultMetaContent}`,
    }]);
  }

  consultationContent$: Observable<any> =  this.dataService.getConsultationPage();
}
