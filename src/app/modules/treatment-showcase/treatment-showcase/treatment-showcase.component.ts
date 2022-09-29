import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TreatmentShowcase } from "src/app/shared/models/treatmentShowcase";
import { DataService } from "src/app/shared/services/data.service";
import { map, Observable, Subscription, tap } from "rxjs";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { BookingService } from "src/app/shared/services/booking.service";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { SeoService } from "src/app/shared/services/seo.service";

@Component({
  selector: "app-treatment-showcase",
  templateUrl: "./treatment-showcase.component.html",
  styleUrls: ["./treatment-showcase.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreatmentShowcaseComponent {
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private bookingService: BookingService,
    public breakpointObserver: BreakpointObserver,
    public seo: SeoService
  ) {}
  treatment: TreatmentShowcase;
  treatmentParentName: string;
  activeTreatmentList: string[];
  breakpoint: string;
  treatmentShowcase$: Observable<TreatmentShowcase>;
  imageUrl: SafeUrl;

  ngOnInit(): void {
    const slug: string = this.route.snapshot.params.slug;
    this.treatmentParentName = this.dataService.currentParentTreatment;
    this.activeTreatmentList = this.dataService.activeTreatmentList
      ? this.dataService.activeTreatmentList
      : ["Back to Treatments"];
    this.treatmentShowcase$ = this.treatmentShowcase(slug);
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        if (
          result.breakpoints[Breakpoints.Large] ||
          result.breakpoints[Breakpoints.XLarge]
        ) {
          this.breakpoint = "large";
        }
      });
  }

  treatmentShowcase(slug: string): Observable<TreatmentShowcase> {
    return this.dataService
      .getTreatmentShowcase(slug)
      .pipe(
        tap((treatment) => {
        this.seo.setTitle(
          `${treatment?.title} | ${this.treatmentParentName}`
        );
        this.seo.setMeta([{
          name: 'description',
          content: `${treatment?.title} | ${this.seo.defaultMetaContent}`,
        }]);
        this.imageUrl = this.getImageUrl(treatment)
      }))
  }

  getImageUrl(treatment: TreatmentShowcase): string{
    if (this.breakpoint === "large") {
    return `${this.dataService.beautiCmsUrl}${treatment.images[0].formats.large.url}`
    } 
    return `${this.dataService.beautiCmsUrl}${treatment.images[0].formats.small.url}`
  }

  goToParent(): void {
    this.router.navigate([`treatments`]);
  }

  openBooking(e): void {
    this.bookingService.sendBooking();
  }
}
