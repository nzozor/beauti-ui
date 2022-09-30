/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { SeoService } from './seo.service';

describe('Service: Seo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeoService]
    });
  });

  it('should ...', inject([SeoService], (service: SeoService) => {
    expect(service).toBeTruthy();
  }));

  it('should set specific title', inject([SeoService], (service: SeoService) => {
    const customTitle = 'custom Title'
    service.setTitle(customTitle);
    const titeTag = document.querySelector("title") as HTMLElement;
    expect(titeTag.innerHTML).toBe('custom Title | Beauti Skin Clinic | Advanced Skin Treatments in SW London');
  }));
});
