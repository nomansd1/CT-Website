import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  navbar = true
  header = false;
  navLinks = [
    { title: 'Home', url: '' },
    { title: 'About', url: 'about' },
    { title: 'Services Network', url: 'networks' },
    { title: 'Softwares', url: 'softwares' },
    { title: 'Customers', url: 'customers' },
    { title: 'Alliances', url: 'alliances' },
    { title: 'Careers', url: 'careers' },
  ]


  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollHeight > 40) {
      this.header = true;
    }
    else {
      this.header = false;
    }
  }

  toggleNavbar() {
    this.navbar = !this.navbar;
    this.header = !this.header;
  }
}
