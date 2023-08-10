import { Component, OnInit } from '@angular/core';
import { AnimateOberverService } from 'src/app/services/animate-oberver.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-about-banner',
  templateUrl: './about-banner.component.html',
  styleUrls: ['./about-banner.component.css']
})
export class AboutBannerComponent implements OnInit {
  shouldAnimate = false;

  constructor( 
    private scrollService: ScrollService, 
    private animateObserver: AnimateOberverService
  ) {}

  ngOnInit(): void {
    const animatedElement = document.getElementById('abtBanner');
    this.animateObserver.observeElementForAnimation(animatedElement, 'animate__slideInUp');
  }
  
  scroll() {
    this.scrollService.scroll()
  }

}
