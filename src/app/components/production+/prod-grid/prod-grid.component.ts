import { Component } from '@angular/core';

@Component({
  selector: 'app-prod-grid',
  templateUrl: './prod-grid.component.html',
  styleUrls: ['./prod-grid.component.css']
})
export class ProdGridComponent {
  tiles = [
    { url: '../../../../assets/prod1.png', title: 'Bill of Material' },
    { url: '../../../../assets/prod2.png', title: 'Production Plan' },
    { url: '../../../../assets/prod3.png', title: 'Production Order' },
    { url: '../../../../assets/prod4.png', title: 'Demand' },
    { url: '../../../../assets/prod5.png', title: 'Product Costing' },
    { url: '../../../../assets/prod6.png', title: 'Labour Costing' },
    { url: '../../../../assets/prod7.png', title: 'Stock Issuance' },
    { url: '../../../../assets/prod8.png', title: 'Stock Return' },
    { url: '../../../../assets/prod9.png', title: 'Daily Production' },
    { url: 'assets/hcm15.png', title: 'Real-Time Reporting' },
    { url: 'assets/hcm16.png', title: 'Business Intelligence Reports & Static Reports' },
    { url: 'assets/hcm17.png', title: 'MS Power BI Dashboard' },
  ];
  
}
