import { Component } from '@angular/core';
import { AnimateOberverService } from 'src/app/services/animate-oberver.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-hcm-banner',
  templateUrl: './hcm-banner.component.html',
  styleUrls: ['./hcm-banner.component.css']
})
export class HcmBannerComponent {
  shouldAnimate = false;

  constructor( 
    private scrollService: ScrollService, 
    private animateObserver: AnimateOberverService
  ) {}

  ngOnInit(): void {
    const animatedElement = document.getElementById('banner');
    this.animateObserver.observeElementForAnimation(animatedElement, 'animate__slideInUp');
  }

  scroll() {
    this.scrollService.scroll()
  }
}
