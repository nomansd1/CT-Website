import { Component } from '@angular/core';

@Component({
  selector: 'app-imp-grid',
  templateUrl: './imp-grid.component.html',
  styleUrls: ['./imp-grid.component.css']
})
export class ImpGridComponent {
  tiles = [
    { url: '../../../../assets/imp1.png', title: 'Import Purchase Order' },
    { url: '../../../../assets/imp2.png', title: 'Import Duty & Taxes' },
    { url: '../../../../assets/imp3.png', title: 'LC Opening' },
    { url: '../../../../assets/imp4.png', title: 'LC Arrival' },
    { url: '../../../../assets/imp5.png', title: 'Import GRN' },
    { url: '../../../../assets/imp6.png', title: 'Duties & Taxes Management' },
    { url: '../../../../assets/imp7.png', title: 'Landed Cost' },
    { url: '../../../../assets/imp8.png', title: 'Multi-Currency Setup' },
    { url: '../../../../assets/imp9.png', title: 'Duty & Taxes Setup' },
    { url: '../../../../assets/imp10.png', title: 'Integration with Finance Module' },
    { url: '../../../../assets/imp11.png', title: 'Ledger Maintained on Foreign & Local Currency' },
  ];  
}
