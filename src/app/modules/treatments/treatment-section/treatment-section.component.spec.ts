import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentSectionComponent } from './treatment-section.component';

describe('TreatmentSectionComponent', () => {
  let component: TreatmentSectionComponent;
  let fixture: ComponentFixture<TreatmentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatmentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
