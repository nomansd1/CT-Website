import { Component } from '@angular/core';

@Component({
  selector: 'app-poss-grid',
  templateUrl: './poss-grid.component.html',
  styleUrls: ['./poss-grid.component.css']
})
export class PossGridComponent {
  tiles = [
    { url: '../../../../assets/poss1.png', title: 'Cloud-based solution' },
    { url: '../../../../assets/poss2.png', title: 'Sales Module' },
    { url: '../../../../assets/poss3.png', title: 'Multiple Payments Mode' },
    { url: '../../../../assets/poss4.png', title: 'Comprehensive Menu Setup' },
    { url: '../../../../assets/poss5.png', title: 'Discounts & Combos' },
    { url: '../../../../assets/poss6.png', title: 'Delivery Module' },
    { url: '../../../../assets/poss7.png', title: 'Take Away' },
    { url: '../../../../assets/poss8.png', title: 'Dine In' },
    { url: '../../../../assets/poss9.png', title: 'Delivery Partner Live Integration' },
    { url: '../../../../assets/poss10.png', title: 'Digital Payments Gateways/Apps Integration' },
    { url: '../../../../assets/poss11.png', title: 'Customer Module' },
    { url: '../../../../assets/poss12.png', title: 'Centralized Administration for Multi-Outlets' },
    { url: '../../../../assets/poss13.png', title: 'Bank/Gift Vouchers' },
    { url: '../../../../assets/poss14.png', title: 'Table Manager' },
    { url: '../../../../assets/poss15.png', title: 'Buffet System' },
    { url: '../../../../assets/poss16.png', title: 'MS Power BI Dashboard' },
    { url: '../../../../assets/poss17.png', title: 'Integration with Government Tax Portal' },
    { url: '../../../../assets/poss18.png', title: 'WhatsApp Messaging' },
    { url: '../../../../assets/poss19.png', title: 'Call Centre Module' },
  ];
  
  tiles2 = [
    { url: '../../../../assets/poss20.png', title: 'Recipe Management' },
    { url: '../../../../assets/poss21.png', title: 'TAB Order Taking' },
    { url: '../../../../assets/poss22.png', title: 'Comprehensive Loyalty Module' },
    { url: '../../../../assets/poss23.png', title: 'KDS Kitchen Display System' },
    { url: '../../../../assets/poss24.png', title: 'Waiting List App' },
    { url: '../../../../assets/poss28.png', title: 'Customer Feedback Module' },
    { url: '../../../../assets/poss29.png', title: 'FACTS (Compliance/Audit Module)' },
  ];
  
  tiles3 = [
    { url: '../../../../assets/poss25.png', title: 'Supply Chain' },
    { url: '../../../../assets/poss26.png', title: 'GL/Finance' },
    { url: '../../../../assets/poss27.png', title: 'HR/Payroll' },
  ];
  
}
