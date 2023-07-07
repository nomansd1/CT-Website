import { Component } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent {
  
  appGridTiles = [
    {
      title: 'order booking app',
      imgSource: '../../../../assets/serv1.png',
    },
    { 
      title: 'delivery & collection app', 
      imgSource: '../../../../assets/serv2.png',
    },
    { 
      title: 'merchanndising app', 
      imgSource: '../../../../assets/serv3.png',
    },
    { 
      title: 'asset management app', 
      imgSource: '../../../../assets/serv4.png',
    },
    { 
      title: 'stock management app', 
      imgSource: '../../../../assets/serv5.png',
    },
    { 
      title: 'retailer app', 
      imgSource: '../../../../assets/serv5.png',
    },
    { 
      title: 'employee self service app', 
      imgSource: '../../../../assets/serv5.png',
    },
    { 
      title: 'doctor/consultant app', 
      imgSource: '../../../../assets/serv5.png',
    },
    { 
      title: 'sales incentive app', 
      imgSource: '../../../../assets/serv5.png',
    },
    { 
      title: 'travelling app', 
      imgSource: '../../../../assets/serv5.png',
    },
    { 
      title: 'cane procurement staff tracking app', 
      imgSource: '../../../../assets/serv5.png',
    }
  ]
}
