import { Component } from '@angular/core';

@Component({
  selector: 'app-onboarding-process',
  templateUrl: './onboarding-process.component.html',
  styleUrls: ['./onboarding-process.component.css']
})
export class OnboardingProcessComponent {
  processes = [
    {
      id: 1,
      title: 'customer engagement',
      url: '../../../../assets/onb1.png'
    },
    {
      id: 2,
      title: 'software demo',
      url: '../../../../assets/onb2.png'
    },
    {
      id: 3,
      title: 'proposal & agreement',
      url: '../../../../assets/onb3.png'
    },
    {
      id: 4,
      title: 'gap analysis',
      url: '../../../../assets/onb4.png'
    },
    {
      id: 5,
      title: 'requirements sign off',
      url: '../../../../assets/onb5.png'
    },
    {
      id: 6,
      title: 'implementation & training',
      url: '../../../../assets/onb6.png'
    },
    {
      id: 7,
      title: 'go live',
      url: '../../../../assets/onb7.png'
    },
  ]
}
