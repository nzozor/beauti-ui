import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {SeoService} from 'src/app/shared/services/seo.service';
import {SLIDE_CONFIG, SlideConf, slideConfig} from "../../../shared/utils/slider-config";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: SLIDE_CONFIG, useValue: slideConfig}]
})
export class ContactComponent implements OnInit {

  slides = [
    {
      alt: 'Top-rated Beauti Skin Clinic in South London, serving Oval, Brixton, Kennington, Vauxhall, Stockwell and Clapham',
      img: 'assets/beauti-Interior-waiting-area-2@2x.jpg'
    },
    {
      alt: 'Top-rated Beauti Skin Clinic in South London, serving Oval, Brixton, Kennington, Vauxhall, Stockwell and Clapham',
      img: 'assets/beauti-Exterior-store-front@2x.jpg'
    },
    {
      alt: 'Top-rated Beauti Skin Clinic in South London, serving Oval, Brixton, Kennington, Vauxhall, Stockwell and Clapham',
      img: 'assets/beauti-Interior-treatment-room-1@2x.jpg'
    },
  ];

  constructor(private seo: SeoService, @Inject(SLIDE_CONFIG) public slideConfig: SlideConf) {
    this.seo.setDefaultMeta();
  }

  ngOnInit(): void {
    const pageTitle = 'Contact | Aesthetic and Skin Specialist in South London';
    this.seo.setTitle(
      pageTitle
    );
    this.seo.setMeta([{
      name: 'description',
      content: `Top-rated Beauti Skin Clinic in South London, serving Oval, Brixton, Kennington, Vauxhall, Stockwell and Clapham`,
    }]);
  }
}
