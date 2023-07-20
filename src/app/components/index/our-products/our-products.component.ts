import { Component } from '@angular/core';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.css']
})
export class OurProductsComponent {
  products = [
    { 
      desc: 'Our Sales & Distribution Software provide tools and features to enhance Sales Efficiency, Track Leads and Opportunities,Manage Customer Relationships, Automate Sales Tasks, and Analyze Sales & Distribution Performance.', 
      gridImgSource: '../../.././../assets/sndnextgrid.png', 
      imgSource: '../../../../assets/sndnext.png',
      btnColor: 'bg-[#0A9AC8]',
      btnHover: 'hover:bg-[#066B8A]',
      textColor: 'text-[#0A9AC8]',
      borderColor: 'hover:ring-[#0A9AC8]',
      rowReverse: false,
      flexEnd: true,
      navArrow: true,
      label: 'S&D Next'
    },
    { 
      desc: 'WMS Extended is a highly Efficient & Effective software to manage Inventory and Stock movement in the Warehouse. The Software is designed to manage extensive operations of Warehouse, including Inventory Management, Storage, and Movement of goods.', 
      gridImgSource: '../../.././../assets/wmsextendgrid.png', 
      imgSource: '../../../../assets/wmsextend.png',
      btnColor: 'bg-[#048CA9]',
      btnHover: 'hover:bg-[#004C61]',
      textColor: 'text-[#048CA9]',
      borderColor: 'hover:ring-[#048CA9]',
      rowReverse: true,
      flexEnd: false,
      navArrow: true,
      label: 'WMS Extended'
    },
    { 
      desc: 'Leading Point of Sale Solution for Small Retail Shops to Chain of Supermarkets. It serves as the Central Hub for processing Sales, Managing Inventory, and providing an overall Seamless Customer Experience. ', 
      gridImgSource: '../../.././../assets/posgrid.png', 
      imgSource: '../../../../assets/pos.png',
      btnColor: 'bg-[#FB8C00]',
      btnHover: 'hover:bg-[#D26F00]',
      textColor: 'text-[#FB8C00]',
      borderColor: 'hover:ring-[#FB8C00]',
      rowReverse: false,
      flexEnd: true,
      navArrow: true,
      label: 'POS Xtreme'
    },
    { 
      desc: 'Leading Point of Sale Solution for Food Kiosk to Fine Dining Restaurants Chain. POS Select, is designed specifically for the food service industry to manage Restaurant Operations, Streamline Order Processing, and Enhancing Overall Dining Experience. ', 
      gridImgSource: '../../.././../assets/possgrid.png', 
      imgSource: '../../../../assets/poss.png',
      btnColor: 'bg-[#769F42]',
      btnHover: 'hover:bg-[#5E8436]',
      textColor: 'text-[#769F42]',
      borderColor: 'hover:ring-[#769F42]',
      rowReverse: true,
      flexEnd: false,
      navArrow: false,
      label: 'POS Select'
    }
  ]
}
