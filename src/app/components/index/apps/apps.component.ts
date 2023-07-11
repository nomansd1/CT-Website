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
      imgSource: '../../../../assets/app1.png',
    },
    { 
      title: 'delivery & collection app', 
      imgSource: '../../../../assets/app2.png',
    },
    { 
      title: 'merchanndising app', 
      imgSource: '../../../../assets/app3.png',
    },
    { 
      title: 'asset management app', 
      imgSource: '../../../../assets/app4.png',
    },
    { 
      title: 'stock management app', 
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
    }
  ]
}
