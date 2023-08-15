import { Component } from '@angular/core';
import { AnimateOberverService } from 'src/app/services/animate-oberver.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  shouldAnimate = false;

  constructor( 
    private scrollService: ScrollService, 
    private animateObserver: AnimateOberverService
  ) {}

  ngOnInit(): void {
    const animatedElement = document.getElementById('banner');
    const animatedElement2 = document.getElementById('bgImg');
    this.animateObserver.observeElementForAnimation(animatedElement, 'animate__slideInLeft');
    this.animateObserver.observeElementForAnimation(animatedElement2, 'bg__size');
  }
  scroll() {
    this.scrollService.scroll()
  }
}
