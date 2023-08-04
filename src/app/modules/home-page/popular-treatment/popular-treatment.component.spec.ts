import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PopularTreatmentComponent} from './popular-treatment.component';
import {MockModule} from "ng-mocks";
import {SlickCarouselModule} from "ngx-slick-carousel";

describe('PopularTreatmentComponent', () => {
  let component: PopularTreatmentComponent;
  let fixture: ComponentFixture<PopularTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularTreatmentComponent],
      imports: [MockModule(SlickCarouselModule)],

    })
      .compileComponents();

    fixture = TestBed.createComponent(PopularTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
