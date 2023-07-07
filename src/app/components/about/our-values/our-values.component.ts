import { Component } from '@angular/core';

@Component({
  selector: 'app-our-values',
  templateUrl: './our-values.component.html',
  styleUrls: ['./our-values.component.css']
})
export class OurValuesComponent {
  valuesGridTiles = [
    {
      icon: '../../../../assets/abt1.png',
      title: 'Integrity',
      desc: 'Do the right thing, Take responsibility, Do what you say.',
    },
    {
      icon: '../../../../assets/abt2.png',
      title: 'Excellence',
      desc: 'Plan ahead, Contiously inmporve, Sweat the details.',
    },
    {
      icon: '../../../../assets/abt3.png',
      title: 'Teamwork',
      desc: 'Trust eachother, Work together, Be coachable.',
    },
    {
      icon: '../../../../assets/abt4.png',
      title: 'Passion',
      desc: 'Serve the coach, Support the partner, Deliver success.',
    },
    {
      icon: '../../../../assets/abt5.png',
      title: 'Win',
      desc: 'Fight hard, Never quit, Finish',
    },
  ]
}
