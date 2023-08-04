import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ConsultationComponent} from './consultation.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormBuilder} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";

describe('ConsultationComponent', () => {
  let component: ConsultationComponent;
  let fixture: ComponentFixture<ConsultationComponent>;
  // Create a mock MatDialog
  const mockDialog = {
    open: jasmine.createSpy('open')
    // add other methods as needed by your tests
  };
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultationComponent],
      imports: [HttpClientTestingModule],
      providers: [FormBuilder,
        {provide: MatDialog, useValue: mockDialog} // Provide the mock MatDialog
      ] // Providing FormBuilder
    })
      .compileComponents();

    fixture = TestBed.createComponent(ConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
