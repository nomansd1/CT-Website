import { Component } from '@angular/core';

@Component({
  selector: 'app-primary-grid',
  templateUrl: './primary-grid.component.html',
  styleUrls: ['./primary-grid.component.css']
})
export class PrimaryGridComponent {
  tiles = [
    { url: '../../../../assets/prim1.png', title: 'Customer Schedule' },
    { url: '../../../../assets/prim2.png', title: 'Sales Order' },
    { url: '../../../../assets/prim3.png', title: 'Sales Quotation' },
    { url: '../../../../assets/prim4.png', title: 'Dispatch' },
    { url: '../../../../assets/prim5.png', title: 'Sales Invoice' },
    { url: '../../../../assets/prim6.png', title: 'Sales Return' },
    { url: 'assets/hcm15.png', title: 'Real-Time Reporting' },
    { url: 'assets/hcm16.png', title: 'Business Intelligence Reports & Static Reports' },
    { url: 'assets/hcm17.png', title: 'MS Power BI Dashboard' },
  ];
  
}
