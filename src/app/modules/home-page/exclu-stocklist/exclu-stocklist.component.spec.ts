import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ExcluStocklistComponent} from './exclu-stocklist.component';
import {MockModule} from "ng-mocks";
import {SlickCarouselModule} from "ngx-slick-carousel";

describe('ExcluStocklistComponent', () => {
  let component: ExcluStocklistComponent;
  let fixture: ComponentFixture<ExcluStocklistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluStocklistComponent],
      imports: [MockModule(SlickCarouselModule)],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluStocklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
