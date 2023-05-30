import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TreatmentShowcase } from '../models/treatmentShowcase';

import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {HomePageSlider, HomePageSliderRaw} from '../models/homepageSlider.model';

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
    return this.http.get<any>(`${this.beautiCmsUrl}/api/treaments?slug=${slug}&populate=*`).pipe(map(treatment => treatment.data[0].attributes));
  }

  getAboutUsPage(): Observable<{ Content: string }> {
    return this.http.get<{ Content: string }>(`${this.beautiCmsUrl}/api/about-us-page`).pipe(
      map((aboutUsData:any) => {
        return aboutUsData.data.attributes;
      })
    );
  }

  getHomageBanners(serverDate: Date = null): Observable<HomePageSlider[]> {
    return this.http.get<HomePageSliderRaw[]>(`${this.beautiCmsUrl}/api/home-page-banners?populate=*`).pipe(
      map((banners: any) => {
        return banners.data
      } ),
      map((banners: HomePageSliderRaw[]) => {
        return banners.map(banner => banner.attributes)
      } ),
      map((banners: HomePageSlider[]) => {
        const defaultBanner = () => banners.filter(banner => banner.isDefaultBanner === true)
        const filteredBanners = banners
          .filter(banner => serverDate ? new Date(serverDate).getTime() - new Date(banner.expirationDate).getTime() <= 0 : true)
          .filter(banner => serverDate ? new Date(serverDate).getTime() - new Date(banner.publication).getTime() >= 0 : true)
          .sort((a: HomePageSlider, b: HomePageSlider) => new Date(b.publication).getTime() - new Date(a.publication).getTime()).filter((banner) => !banner.hide)
        return filteredBanners.length > 0 ? filteredBanners : defaultBanner()
      })
    );
  }

  getServerTimeThenBanner(): any {
    return this.getServerDate().pipe(
      switchMap((serverTime: Date) =>
        this.getHomageBanners(serverTime)
      ),
      catchError(() => this.getHomageBanners()
      ))
  }

  getServerDate(): Observable<Date> {
    return this.http.get<Date>(`${environment.dateApi}/date`)
  }
}
