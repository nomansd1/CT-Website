import { Component } from '@angular/core';
import { AnimateOberverService } from 'src/app/services/animate-oberver.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent {
  
  shouldAnimate = false;

  constructor(private animateObserver: AnimateOberverService) {}

  ngOnInit(): void {
    const animatedElement = document.getElementById('appsHeading');
    const animatedElement2 = document.getElementById('appsGrid');
    this.animateObserver.observeElementForAnimation(animatedElement, 'animate__slideInLeft');
    this.animateObserver.observeElementForAnimation(animatedElement2, 'animate__slideInRight');
  }

  appGridTiles = [
    {
      title: 'order booking app',
      imgSource: '../../../../assets/app1.png',
    },
    { 
      title: 'delivery & collection app', 
      imgSource: '../../../../assets/app2.png',
    },
    { 
      title: 'merchandising app', 
      imgSource: '../../../../assets/app3.png',
    },
    { 
      title: 'asset management app', 
      imgSource: '../../../../assets/app4.png',
    },
    { 
      title: 'SCM app', 
      imgSource: '../../../../assets/app5.png',
    },
    { 
      title: 'retailer app', 
      imgSource: '../../../../assets/app6.png',
    },
    { 
      title: 'employee self service app', 
      imgSource: '../../../../assets/app7.png',
    },
    { 
      title: 'doctor/consultant app', 
      imgSource: '../../../../assets/app8.png',
    },
    { 
      title: 'sales incentive app', 
      imgSource: '../../../../assets/app9.png',
    },
    { 
      title: 'travelling app', 
      imgSource: '../../../../assets/app10.png',
    },
    { 
      title: 'cane procurement staff tracking app', 
      imgSource: '../../../../assets/app11.png',
    },
    { 
      title: 'pharmacist app', 
      imgSource: '../../../../assets/app12.png',
    },
    { 
      title: 'phlebotomy app', 
      imgSource: '../../../../assets/app13.png',
    },
    { 
      title: 'waiting list app', 
      imgSource: '../../../../assets/app14.png',
    },
    { 
      title: 'dressing app', 
      imgSource: '../../../../assets/app15.png',
    }
  ]
}
