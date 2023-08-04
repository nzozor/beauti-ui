import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TreatmentInfoComponent} from './treatment-info.component';
import {DataService} from "../../../shared/services/data.service";

describe('TreatmentInfoComponent', () => {
  let component: TreatmentInfoComponent;
  let fixture: ComponentFixture<TreatmentInfoComponent>;

  // Define a mock version of DataService
  let mockDataService = {
    // Add methods and properties as needed by your tests
  };

  // Define a mock data object
  let mockData = {
    attributes: {
      title: 'Test Title',
      hasShowcase: false,
      url: 'test-url'
      // Add any other properties that are accessed by your template
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreatmentInfoComponent],
      providers: [
        {provide: DataService, useValue: mockDataService} // Provide the mock DataService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TreatmentInfoComponent);
    component = fixture.componentInstance;

    // Assign the mock data object to the component's data property
    component.data = mockData;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
