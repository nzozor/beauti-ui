import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TreatmentShowcase } from '../models/treatmentShowcase';

import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HomePageSlider } from '../models/homepageSlider.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  beautiCmsUrl = environment.cmsUrl;

  currentParentTreatment = 'Skin Treatmetns';
  activeTreatmentList: string[];
  activeTreatment: string;
  
  getTreatmentShowcase(slug: string): Observable<TreatmentShowcase> {
    return this.http.get<TreatmentShowcase>(`${this.beautiCmsUrl}/treatments?slug=${slug}`).pipe(map(treatment =>treatment[0]));
  }

  getAboutUsPage(): Observable<{Content: string}> {
    return this.http.get<{Content: string}>(`${this.beautiCmsUrl}/about-us-page`);
  }

  getHomageBanners(): Observable<HomePageSlider> {
    return this.http.get<any>(`${this.beautiCmsUrl}/homepage-sliders`).pipe(
      map((banners) => banners.sort((a: any, b: any) => new Date(b.publication).getTime() - new Date(a.publication).getTime()).filter((banner) => !banner.hide))
    );
  }
}
