import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss'],
})
export class NavbarMenuComponent {
  top: any;
  left: any;
  expand = false;

  constructor() {}

  @HostListener('document:click', ['$event'])
  onClick($event: any) {
    this.expand = true;
    setTimeout(() => {
      this.expand = false;
    }, 500);
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove($event: any) {
    this.top = $event.pageY - 10 + 'px';
    this.left = $event.pageX - 10 + 'px';
  }
}
