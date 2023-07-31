import { Component } from '@angular/core';

@Component({
  selector: 'app-primary-grid',
  templateUrl: './primary-grid.component.html',
  styleUrls: ['./primary-grid.component.css']
})
export class PrimaryGridComponent {
  tiles =[
    { url: '../../../../assets/prim1.png', title: 'customer schedule' },
    { url: '../../../../assets/prim2.png', title: 'sales order' },
    { url: '../../../../assets/prim3.png', title: 'sales quotation' },
    { url: '../../../../assets/prim4.png', title: 'dispatch' },
    { url: '../../../../assets/prim5.png', title: 'sales invoice' },
    { url: '../../../../assets/prim6.png', title: 'sales return' },
  ]
}
