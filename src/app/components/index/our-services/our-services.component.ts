import { Component } from '@angular/core';
import { AnimateOberverService } from 'src/app/services/animate-oberver.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent {
  shouldAnimate = false;

  constructor(private animateObserver: AnimateOberverService) {}

  ngOnInit(): void {
    const animatedElement = document.getElementById('serviceHeading');
    const animatedElement2 = document.getElementById('servicesGrid');
    this.animateObserver.observeElementForAnimation(animatedElement, 'animate__slideInLeft');
    this.animateObserver.observeElementForAnimation(animatedElement2, 'animate__slideInRight');
  }
  servicesGridTiles = [
    {
      title: 'cloud based software solutions',
      imgSource: '../../../../assets/serv1.png',
      hoverImgSource: '../../../../assets/servhov1.png',
      isHovered: false
    },
    { 
      title: 'mobile applications', 
      imgSource: '../../../../assets/serv2.png', 
      hoverImgSource: '../../../../assets/servhov2.png',
      isHovered: false
    },
    { 
      title: 'data analytics & MS power BI dashboards', 
      imgSource: '../../../../assets/serv3.png', 
      hoverImgSource: '../../../../assets/servhov3.png',
      isHovered: false 
    },
    { 
      title: '3rd party softwares integrations', 
      imgSource: '../../../../assets/serv4.png', 
      hoverImgSource: '../../../../assets/servhov4.png',
      isHovered: false 
    },
    { 
      title: 'comprehensive after sales support', 
      imgSource: '../../../../assets/serv5.png', 
      hoverImgSource: '../../../../assets/servhov5.png',
      isHovered: false 
    },
    { 
      title: 'customized software development', 
      imgSource: '../../../../assets/serv6.png', 
      hoverImgSource: '../../../../assets/servhov6.png',
      isHovered: false 
    }
  ]

}
