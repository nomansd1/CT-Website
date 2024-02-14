import { Component, HostListener, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

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
  hideTop = false;
  resourceDropdown = false;

  @Output() toggleSidebar = new EventEmitter<void>();

  navLinks = [
    { title: 'Home', url: '' },
    { title: 'About Us', url: 'about' },
    { title: 'Services Network', url: 'networks' },
    { title: 'Softwares', url: 'softwares' },
    { title: 'Customers', url: 'customers' },
    { title: 'Alliances', url: 'alliances' },
    // { title: 'Careers', url: 'careers' },
  ]

  resourceLinks = [
    { title: 'Careers', url: 'careers' },
    { title: 'Blogs', url: '' },
    { title: 'FAQs', url: 'faq' },
    { title: 'Event Gallery', url: '' },
  ]

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    public router: Router
  ) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollHeight > 70 || this.router.url == '/faq') {
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

  @HostListener('document:click', ['$event.target'])
  onclick(target: HTMLElement) {
    const resourceLink = document.querySelector('#resourceLink') as HTMLElement;
    const resourceDrp = document.querySelector('#resourceDropdown') as HTMLElement;

    if (this.resourceDropdown === true) {
      // Check if the click target is not the button and not the dropdown
      if (target !== resourceLink && target !== resourceDrp) {
        console.log('Setting resourceDropdown to false');
        this.resourceDropdown = false;
      }
    }
  }



  toggleNavbar() {
    this.navbar = !this.navbar;
    this.header = !this.header;
  }

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  openResourceDropdown() {
    this.resourceDropdown = !this.resourceDropdown;
  }

  closeResourceDropdown() {
    this.resourceDropdown = false;
  }
}
