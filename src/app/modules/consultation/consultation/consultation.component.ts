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
      })
      // this.dataService.postConsultation(this.consultationForm.value).pipe(
      //   switchMap(() => {
      //     return this.dataService.sendEmail({
      //       to: this.consultationForm.value.email,
      //       subject: `${this.consultationForm.value.firstName} ${this.consultationForm.value.lastName} booked a consultation`,
      //       number: this.consultationForm.value.contactNumber,
      //       text: this.consultationForm.value.message,
      //       firstTimeCustomer: this.consultationForm.value.firstTimeCustomer ? 'First time customer' : 'Recurring customer'
      //     });
      //   })
      // ).subscribe(
      //   // Successful handling of both postConsultation and sendEmail
      //   () => {
      //     this.dialog.open(FormModalComponent, {
      //       data: {success: true},
      //     });
      //   },
      //   // Error handling for either postConsultation or sendEmail
      //   () => {
      //     this.dialog.open(FormModalComponent, {
      //       data: {success: false},
      //     });
      //   }
      // );
    }
  }


  private setSeo(): void {
    const pageTitle = 'Consultation | Aesthetic and Skin Consultation in South London';
    this.seo.setTitle(
      pageTitle
    );

    this.seo.setMeta([{
      name: 'description',
      content: `Top-rated Beauti Skin Clinic in South London, serving Oval, Brixton, Kennington, Vauxhall, Stockwell and Clapham`,
    }]);
  }
}
