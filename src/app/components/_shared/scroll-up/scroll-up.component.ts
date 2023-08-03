import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-up',
  templateUrl: './scroll-up.component.html',
  styleUrls: ['./scroll-up.component.css']
})
export class ScrollUpComponent {
  showButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check if the user has scrolled beyond the height of one viewport (100vh)
    this.showButton = window.scrollY > window.innerHeight;
  }
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
