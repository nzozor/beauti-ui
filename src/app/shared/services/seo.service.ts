import { Injectable } from "@angular/core";
import { Title, Meta, MetaDefinition } from "@angular/platform-browser";

@Injectable({
  providedIn: "root",
})
export class SeoService {
  private defaultTitle =
    "Beauti Skin Clinic | Advanced Skin Treatments in SW London";

  constructor(private meta: Meta, private titleService: Title) { }
  defaultMetaContent = `Professional skin and waxing services only 5 mins walk from Oval Station.
  Founded by Aesthetician Cinzia Campigotto who has over 20 years of experience.`;

  public setTitle(newTitle: string) {
    this.titleService.setTitle(`${newTitle} | Beauti Skin Clinic`);
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
}
