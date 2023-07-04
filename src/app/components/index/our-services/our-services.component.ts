import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent {
  
  servicesGridTiles = [
    {
      title: 'cloud based sofwtare solutions',
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
      title: '3rd party softwares integerations', 
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
      imgSource: '../../../../assets/serv5.png', 
      hoverImgSource: '../../../../assets/servhov5.png',
      isHovered: false 
    }
  ]

}
