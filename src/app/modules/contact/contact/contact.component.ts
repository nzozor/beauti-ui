import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };

  slides = [
    {img: 'assets/beauti-skin-clinic-oval-1.jpg' },
    {img: 'assets/beauti-skin-clinic-oval-2.jpg' },
    {img: 'assets/beauti-skin-clinic-oval-3.jpg' },
    {img: 'assets/beauti-skin-clinic-oval-alumier.jpg' },
    {img: 'assets/beauti-skin-clinic-oval-sothys.jpg' },
    {img: 'assets/beauti-skin-clinic-oval-waxed.jpg' },
  ];

  constructor(private seo: SeoService ) { 
    this.seo.setDefaultMeta();
  }
}
