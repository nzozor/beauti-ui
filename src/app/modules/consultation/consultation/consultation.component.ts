import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DataService} from "../../../shared/services/data.service";
import {SeoService} from "../../../shared/services/seo.service";
import {Observable} from "rxjs";
import {FormBuilder, Validators} from '@angular/forms';
import {MatDialog} from "@angular/material/dialog";
import {FormModalComponent} from "../form-modal/form-modal.component";

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultationComponent implements OnInit {
  consultationForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    contactNumber: ['', Validators.required],
    email: ['', Validators.email],
    message: ['', Validators.required],
    firstTimeCustomer: [''],
  });

  consultationContent$: Observable<any> = this.dataService.getConsultationPage();
  sendBtnStatus: 'clicked' | 'pristine' = 'pristine';

  constructor(private dataService: DataService, private seo: SeoService, private fb: FormBuilder, public dialog: MatDialog) {
    this.seo.setDefaultMeta();
    this.setSeo();
  }

  ngOnInit() {
    this.consultationForm.valueChanges.subscribe(() => {
      this.sendBtnStatus = 'pristine'
    })
  }

  onFormSubmit() {
    this.sendBtnStatus = 'clicked';
    if (this.consultationForm.valid) {
      this.dialog.open(FormModalComponent, {
        data: {success: true},
      });
    }
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
}
