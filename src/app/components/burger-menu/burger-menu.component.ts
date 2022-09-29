import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BurgerMenuComponent {

  @Input() active = false;
  @Input() sticky = false;
  @Output() menuLinkOpen = new EventEmitter<boolean>();

  toggleMenu(): void {
    this.active = !this.active;
    this.menuLinkOpen.emit(this.active);
  }
}
