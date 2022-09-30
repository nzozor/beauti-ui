/* tslint:disable:no-unused-variable */
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { LazyImgDirective } from './lazy-img.directive';

@Component({
  template: `<div appImgLazyLoad>
    <img class="js-lazy-image" src="test.jpg" alt="test"/>
  </div>`
})
class TestComponent {
}


describe('Directive: LazyImgDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let imgEl: DebugElement;
  let directives;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, LazyImgDirective]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // initial binding
    directives = fixture.debugElement.queryAll(By.directive(LazyImgDirective));
    imgEl = fixture.debugElement.query(By.css('img'));
  });

  it('should have 1 directive attached', () => {
    expect(directives.length).toBe(1);
  });
  it('should had the lazy loading attribute on an image element"', () => {
    const imgLazy = imgEl.nativeElement.getAttribute('loading');
    expect(imgLazy).toEqual('lazy')
  });
});