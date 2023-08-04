import {SectionHostDirective} from './section-host.directive';
import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

@Component({
  template: `
    <div sectionHost></div>`
})
class TestHostComponent {
  @ViewChild(SectionHostDirective, {static: true}) directive!: SectionHostDirective;
}

describe('SectionHostDirective', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionHostDirective, TestHostComponent]
    });

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = component.directive;
    expect(directive).toBeTruthy();
  });

  it('should have viewContainerRef defined', () => {
    const directive = component.directive;
    expect(directive.viewContainerRef).toBeDefined();
  });
});
