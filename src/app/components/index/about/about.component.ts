import { Component } from '@angular/core';
import { AnimateOberverService } from 'src/app/services/animate-oberver.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  shouldAnimate = false;

  constructor(private animateObserver: AnimateOberverService) {}

  ngOnInit(): void {
    const animatedElement = document.getElementById('aboutHeading');
    const animatedElement2 = document.getElementById('aboutGrid');
    this.animateObserver.observeElementForAnimation(animatedElement, 'animate__slideInLeft');
    this.animateObserver.observeElementForAnimation(animatedElement2, 'animate__slideInRight');
  }
  aboutGridTiles = [
    {title: 'Technologies', url: '../../../../assets/abtgrid1.png', link: 'technologies'},
    {title: 'Support Mechanism', url: '../../../../assets/abtgrid2.png', link: 'support'},
    {title: 'On-Boarding process', url: '../../../../assets/abtgrid3.png', link: 'boarding'},
    {title: 'Our Services Network', url: '../../../../assets/abtgrid4.png', link: 'networks'},
  ]

}
