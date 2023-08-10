import { Component } from '@angular/core';
import { AnimateOberverService } from 'src/app/services/animate-oberver.service';

@Component({
  selector: 'app-our-mission',
  templateUrl: './our-mission.component.html',
  styleUrls: ['./our-mission.component.css']
})
export class OurMissionComponent {
  shouldAnimate = false;

  constructor(private animateObserver: AnimateOberverService) {}

  ngOnInit(): void {
    const animatedElement = document.getElementById('missionDetails');
    const animatedElement2 = document.getElementById('missionGrid');
    this.animateObserver.observeElementForAnimation(animatedElement, 'animate__slideInLeft');
    this.animateObserver.observeElementForAnimation(animatedElement2, 'animate__slideInRight');
  }
}
