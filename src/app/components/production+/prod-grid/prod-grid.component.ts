import { Component } from '@angular/core';

@Component({
  selector: 'app-prod-grid',
  templateUrl: './prod-grid.component.html',
  styleUrls: ['./prod-grid.component.css']
})
export class ProdGridComponent {
  tiles =[
    { url: '../../../../assets/prod1.png', title: 'bill of material' },
    { url: '../../../../assets/prod2.png', title: 'production plan' },
    { url: '../../../../assets/prod3.png', title: 'production order' },
    { url: '../../../../assets/prod4.png', title: 'demand' },
    { url: '../../../../assets/prod5.png', title: 'product costing' },
    { url: '../../../../assets/prod6.png', title: 'labour costing' },
    { url: '../../../../assets/prod7.png', title: 'stock issuance' },
    { url: '../../../../assets/prod8.png', title: 'stock return' },
    { url: '../../../../assets/prod9.png', title: 'daily production' },
  ]
}
