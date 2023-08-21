import { Component } from '@angular/core';
import { AnimateOberverService } from 'src/app/services/animate-oberver.service';

@Component({
  selector: 'app-our-values',
  templateUrl: './our-values.component.html',
  styleUrls: ['./our-values.component.css']
})
export class OurValuesComponent {
  shouldAnimate = false;

  constructor( 
    private animateObserver: AnimateOberverService
  ) {}


  ngOnInit(): void {
    const animatedElement = document.getElementById('ourValues');
    this.animateObserver.observeElementForAnimation(animatedElement, 'animate__slideInRight');
  }
  
  valuesGridTiles = [
    {
      count: '../../../../assets/abtinfo1.png',
      icon: '../../../../assets/abt1.png',
      title: 'Integrity',
      desc: 'Do the right thing, Take responsibility, Do what you say.',
    },
    {
      count: '../../../../assets/abtinfo2.png',
      icon: '../../../../assets/abt2.png',
      title: 'Excellence',
      desc: 'Plan ahead, Continuously improve, Sweat the details.',
    },
    {
      count: '../../../../assets/abtinfo3.png',
      icon: '../../../../assets/abt3.png',
      title: 'Teamwork',
      desc: 'Trust each other, Work together, Be coachable.',
    },
    {
      count: '../../../../assets/abtinfo4.png',
      icon: '../../../../assets/abt4.png',
      title: 'Passion',
      desc: 'Serve the coach, Support the partner, Deliver success.',
    },
    {
      count: '../../../../assets/abtinfo5.png',
      icon: '../../../../assets/abt5.png',
      title: 'Win',
      desc: 'Fight hard, Never quit, Finish',
    },
  ]
}
