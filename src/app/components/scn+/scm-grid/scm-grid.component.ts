import { Component } from '@angular/core';

@Component({
  selector: 'app-scm-grid',
  templateUrl: './scm-grid.component.html',
  styleUrls: ['./scm-grid.component.css']
})
export class ScmGridComponent {
  tiles =[
    { url: '../../../../assets/scm1.png', title: 'product management' },
    { url: '../../../../assets/scm2.png', title: 'suppliers management' },
    { url: '../../../../assets/scm3.png', title: 'multi warehouse setup' },
    { url: '../../../../assets/scm4.png', title: 'multi company setups' },
    { url: '../../../../assets/scm5.png', title: 'multi users setups' },
    { url: '../../../../assets/scm6.png', title: 'batch & expiry management' },
    { url: '../../../../assets/scm7.png', title: 'barcode module' },
    { url: '../../../../assets/scm8.png', title: 'requisition' },
    { url: '../../../../assets/scm9.png', title: 'quotation' },
    { url: '../../../../assets/scm10.png', title: 'comparitives' },
    { url: '../../../../assets/scm11.png', title: 'purchase order' },
    { url: '../../../../assets/scm12.png', title: 'inspection' },
    { url: '../../../../assets/scm13.png', title: 'goods recieved' },
    { url: '../../../../assets/scm14.png', title: 'goods return' },
    { url: '../../../../assets/scm15.png', title: 'demand' },
    { url: '../../../../assets/scm16.png', title: 'transfer in' },
    { url: '../../../../assets/scm17.png', title: 'transfer out' },
    { url: '../../../../assets/scm18.png', title: 'scanning option' },
    { url: '../../../../assets/scm19.png', title: 'pallet, location, batch wise stock position' },
    { url: '../../../../assets/scm11.png', title: 'accurate stock control' },
    { url: '../../../../assets/scm21.png', title: 'easy product traceability' },
    { url: '../../../../assets/scm22.png', title: 'HHT stock audit' },
    { url: '../../../../assets/scm23.png', title: 'power BI for management' },
  ]

  tiles2 = [
    { url: '../../../../assets/scm19.png', title: '' },
    { url: '../../../../assets/scm11.png', title: '' },
    { url: '../../../../assets/scm21.png', title: '' },
    { url: '../../../../assets/scm18.png', title: '' },
    { url: '../../../../assets/scm22.png', title: '' },
    { url: '../../../../assets/scm15.png', title: '' },
    { url: '../../../../assets/scm16.png', title: '' },
    { url: '../../../../assets/scm17.png', title: '' },
  ]
}
