import { Component } from '@angular/core';

@Component({
  selector: 'app-imp-grid',
  templateUrl: './imp-grid.component.html',
  styleUrls: ['./imp-grid.component.css']
})
export class ImpGridComponent {
  tiles =[
    { url: '../../../../assets/imp1.png', title: 'import purchase order' },
    { url: '../../../../assets/imp2.png', title: 'import duty & taxes' },
    { url: '../../../../assets/imp3.png', title: 'LC opening' },
    { url: '../../../../assets/imp4.png', title: 'LC arrival' },
    { url: '../../../../assets/imp5.png', title: 'import GRN' },
    { url: '../../../../assets/imp6.png', title: 'duties & taxes management' },
    { url: '../../../../assets/imp7.png', title: 'landed cost' },
    { url: '../../../../assets/imp8.png', title: 'multi currency setup' },
    { url: '../../../../assets/imp9.png', title: 'duty & taxes setup' },
    { url: '../../../../assets/imp10.png', title: 'integration with finance module' },
    { url: '../../../../assets/imp11.png', title: 'ledger maintained on foreign & local currency' },
  ]
}
