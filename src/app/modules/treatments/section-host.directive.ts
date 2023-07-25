import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[sectionHost]'
})
export class SectionHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }


}
