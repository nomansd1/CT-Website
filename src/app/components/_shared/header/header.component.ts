import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  navbar = true
  header = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollHeight > 400) {
      this.header = true;
    }
    else {
      this.header = false;
    }
  }

  toggleNavbar() {
    this.navbar = !this.navbar;
  }
}
