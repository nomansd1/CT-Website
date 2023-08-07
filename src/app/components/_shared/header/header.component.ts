import { Component, HostListener, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  navbar = true
  header = false;
  fixedHeader = false;
  absoluteHeader = true;
  lastScrollTop = 0;
  hideTop = false
  @Output() toggleSidebar = new EventEmitter<void>();

  navLinks = [
    { title: 'Home', url: '' },
    { title: 'About Us', url: 'about' },
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
    if (scrollHeight > 70) {
      this.header = true;
      this.hideTop = true
    }
    else {
      this.header = false;
    }
    // Get the current scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Check if scrolling down and not at the top of the page
    if (scrollTop > this.lastScrollTop && scrollTop > 0) {
      this.fixedHeader = false;
      this.absoluteHeader = true;
    } else {
      this.fixedHeader = true;
      this.absoluteHeader = false;
      this.hideTop = false
    }

    this.lastScrollTop = scrollTop;
  }

  toggleNavbar() {
    this.navbar = !this.navbar;
    this.header = !this.header;
  }

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
