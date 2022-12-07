import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, Inject } from '@angular/core';

@Directive({
  selector: '[appImgLazyLoad]'
})
export class LazyImgDirective implements AfterViewInit {
  observer: IntersectionObserver;
  private window: Window;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView;
  }

  ngAfterViewInit(): void {
    const supports = 'loading' in HTMLImageElement.prototype;

    const images = this.document.querySelectorAll('.js-lazy-image');
    if (supports) {
      images.forEach(image => image.setAttribute('loading', 'lazy'));
    } else if (this.window && 'IntersectionObserver' in this.window) {
      const config = {
        rootMargin: '50px 0px',
        threshold: 0.01
      };
      this.observer = new IntersectionObserver(this.onIntersection, config);
      images.forEach(image => {
        this.observer.observe(image);
      });
    } else {
      Array.from(images).forEach(image => this.preloadImage(image));
    }
  }

  onIntersection(entries: any): void {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        this.observer.unobserve(entry.target);
        this.preloadImage(entry.target);
      }
    });
  }

  preloadImage(url: any) {

    const img = this.document.createElement('img');
    img.src = url;
  }
}
