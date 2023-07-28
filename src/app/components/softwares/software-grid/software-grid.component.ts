import { Component } from '@angular/core';

@Component({
  selector: 'app-software-grid',
  templateUrl: './software-grid.component.html',
  styleUrls: ['./software-grid.component.css']
})
export class SoftwareGridComponent {
  snDproducts = [
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
      navArrow: false,
      label: 'S&D Next'
    },
    { 
      desc: 'Cloud Tenants S&D e.suite takes you to the next level of Business Optimization. It includes DBRS, Sales Forecast, Distribution Claims, Sales Incentives and Merchandising Softwares that can drive your business towards success.', 
      gridImgSource: '../../.././../assets/sndesuitegrid.png', 
      imgSource: '../../../../assets/sndesuite.png',
      btnColor: 'bg-[#0A9AC8]',
      btnHover: 'hover:bg-[#066B8A]',
      textColor: 'text-[#0A9AC8]',
      borderColor: 'hover:ring-[#0A9AC8]',
      rowReverse: true,
      flexEnd: false,
      navArrow: true,
      label: 'S&D e.suite'
    },
  ]

  posProducts =[
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
      navArrow: false,
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
      navArrow: true,
      label: 'POS Select'
    }
  ]

  erpProducts = [
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
      navArrow: false,
      label: 'WMS Extended'
    },
    { 
      desc: 'Cloud Tenants SCM+ (Supply Chain Management) solution offers end-to-end Supply Chain Cycle. This module oversees the Procurement, Inventory, and Distribution of Materials and Products, as well as the management of Vendors and Suppliers.', 
      gridImgSource: '../../.././../assets/scmgrid.png', 
      imgSource: '../../../../assets/scm.png',
      btnColor: 'bg-[#C47ECE]',
      btnHover: 'hover:bg-[#A663C1]',
      textColor: 'text-[#C47ECE]',
      borderColor: 'hover:ring-[#C47ECE]',
      rowReverse: true,
      flexEnd: false,
      navArrow: false,
      label: 'SCM+'
    },
    { 
      desc: 'Cloud Tenants HCM+ (Human Capital Management) solutions offers end-to-end Employee Lifecycle Management. It consist of integeration in HR, Time Adherence, Attendance, Payroll, Scheduling and Other processes of HR and Payroll Management.', 
      gridImgSource: '../../.././../assets/hcmgrid.png', 
      imgSource: '../../../../assets/hcm.png',
      btnColor: 'bg-[#0097A7]',
      btnHover: 'hover:bg-[#00808E]',
      textColor: 'text-[#0097A7]',
      borderColor: 'hover:ring-[#0097A7]',
      rowReverse: false,
      flexEnd: true,
      navArrow: false,
      label: 'HCM+'
    },
    { 
      desc: 'Our Finance+ Module manages the financial transactions and accounting activities of an Organizations, including Genral Ledger, Accounts Payable, Accounts Receivable, Cash Management, Budget and Forecasting, Tax Management and Fixed Assets.', 
      gridImgSource: '../../.././../assets/financegrid.png', 
      imgSource: '../../../../assets/finance.png',
      btnColor: 'bg-[#CDDC39]',
      btnHover: 'hover:bg-[#AEBB30]',
      textColor: 'text-[#CDDC39]',
      borderColor: 'hover:ring-[#CDDC39]',
      rowReverse: true,
      flexEnd: false,
      navArrow: false,
      label: 'Finance+'
    },
    { 
      desc: 'Our Production Module refers to a category of Software tools & Systems that are designed to assist businesses in Managing, optimizing their production processes. It helps you Streamline & Automate various aspects of Production such as Planning, Scheduling, Inventory Management, Quality Control and Reporting.', 
      gridImgSource: '../../.././../assets/productiongrid.png', 
      imgSource: '../../../../assets/production.png',
      btnColor: 'bg-[#4C8EDF]',
      btnHover: 'hover:bg-[#4179BE]',
      textColor: 'text-[#4C8EDF]',
      borderColor: 'hover:ring-[#4C8EDF]',
      rowReverse: false,
      flexEnd: true,
      navArrow: false,
      label: 'Production+'
    },
    { 
      desc: 'Cloud Tenants Import  Software Solution manages Landed Cost Tracking, Duty and Taxes, LC Opening/Arrival and Import Good Received Note (GRN).', 
      gridImgSource: '../../.././../assets/importgrid.png', 
      imgSource: '../../../../assets/import.png',
      btnColor: 'bg-[#105AB6]',
      btnHover: 'hover:bg-[#0E4D9B]',
      textColor: 'text-[#105AB6]',
      borderColor: 'hover:ring-[#105AB6]',
      rowReverse: true,
      flexEnd: false,
      navArrow: false,
      label: 'Import+'
    },
    { 
      desc: 'Cloud Tenants Primary Sales Software can be used to automate and monitor end-to-end primary sales activities which includes interaction between Manufacturers and Dealers. It consist of sending order to Manufacturers, Prepare, Dispatch and Receive Cash/Cheque and Delivery of Products to Dealer\'s end.', 
      gridImgSource: '../../.././../assets/primarygrid.png', 
      imgSource: '../../../../assets/primary.png',
      btnColor: 'bg-[#00CCFF]',
      btnHover: 'hover:bg-[#00ADD9]',
      textColor: 'text-[#00CCFF]',
      borderColor: 'hover:ring-[#00CCFF]',
      rowReverse: false,
      flexEnd: true,
      navArrow: false,
      label: 'Primary+'
    },
  ]
}
