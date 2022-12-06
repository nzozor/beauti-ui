import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { Title, Meta, MetaDefinition } from "@angular/platform-browser";

@Injectable({
  providedIn: "root",
})
export class SeoService {
  private defaultTitle =
    "Beauti Skin Clinic | Advanced Skin Treatments in Oval, Vauxhall, Kennington, Stockwell, brixton, clapham, sw9";
  private seoTitle = 'Beauti Skin Clinic | Oval, Vauxhall, Kennington, Stockwell, brixton, clapham, sw9'
  constructor(private meta: Meta, private titleService: Title, @Inject(DOCUMENT) private doc: Document) { }
  defaultMetaContent = `Professional skin and waxing services only 5 mins walk from Oval Station, Brixton road London.
  Founded by Aesthetician Cinzia Campigotto | 20 years experience`;

  get seoAltTitle() {
    return this.defaultTitle;
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(`${newTitle} | Oval, Vauxhall, Kennington, Stockwell, Brixton, Clapham, sw9`);
  }

  public setMeta(meta: MetaDefinition[]) {
    this.meta.addTags(meta);
  }

  public setDefaultMeta() {
    this.titleService.setTitle(
      this.defaultTitle
    );
    this.meta.addTags([
      {
        name: 'description',
        content: this.defaultMetaContent
      },
    ]);
  }

  createLinkForCanonicalURL(): void {
    const canonical = this.doc.querySelector('link[rel="canonical"');
    if (canonical) {
      canonical.setAttribute('href', 'https://www.beautiskinclinic.com' + this.doc.location.pathname);
      return;
    }

    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.doc.head.appendChild(link);
    link.setAttribute('href', 'https://www.beautiskinclinic.com' + this.doc.location.pathname);
  }
}
