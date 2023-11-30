import { Component } from '@angular/core';

@Component({
  selector: 'app-scm-grid',
  templateUrl: './scm-grid.component.html',
  styleUrls: ['./scm-grid.component.css']
})
export class ScmGridComponent {
  tiles = [
    { url: '../../../../assets/scm1.png', title: 'Product Management' },
    { url: '../../../../assets/scm2.png', title: 'Suppliers Management' },
    { url: '../../../../assets/scm3.png', title: 'Multi-Warehouse Setup' },
    { url: '../../../../assets/scm4.png', title: 'Multi-Company Setup' },
    { url: '../../../../assets/scm5.png', title: 'Multi-Users Setup' },
    { url: '../../../../assets/scm6.png', title: 'Batch and Expiry Management' },
    { url: '../../../../assets/scm7.png', title: 'Barcode Module' },
    { url: '../../../../assets/scm8.png', title: 'Requisition' },
    { url: '../../../../assets/scm9.png', title: 'Quotation' },
    { url: '../../../../assets/scm10.png', title: 'Comparatives' },
    { url: '../../../../assets/scm11.png', title: 'Purchase Order' },
    { url: '../../../../assets/scm12.png', title: 'Inspection' },
    { url: '../../../../assets/scm13.png', title: 'Goods Received' },
    { url: '../../../../assets/scm14.png', title: 'Goods Return' },
    { url: '../../../../assets/scm15.png', title: 'Demand' },
    { url: '../../../../assets/scm16.png', title: 'Transfer In' },
    { url: '../../../../assets/scm17.png', title: 'Transfer Out' },
    { url: '../../../../assets/scm18.png', title: 'Scanning Option' },
    { url: '../../../../assets/scm19.png', title: 'Pallet, Location, Batch-wise Stock Position' },
    { url: '../../../../assets/scm20.png', title: 'Accurate Stock Control' },
    { url: '../../../../assets/scm21.png', title: 'Easy Product Traceability' },
    { url: '../../../../assets/scm22.png', title: 'HHT Stock Audit' },
    { url: '../../../../assets/scm23.png', title: 'Power BI for Management' },
  ];
  
  tiles2 = [
    { url: '../../../../assets/scm19.png', title: 'Purchase Requisition' },
    { url: '../../../../assets/scm20.png', title: 'Purchase Order' },
    { url: '../../../../assets/scm21.png', title: 'GRN' },
    { url: '../../../../assets/scm18.png', title: 'Goods Received' },
    { url: '../../../../assets/scm22.png', title: 'HHT Stock Audit' },
    { url: '../../../../assets/scm15.png', title: 'Demand' },
    { url: '../../../../assets/scm16.png', title: 'Transfer In' },
    { url: '../../../../assets/scm17.png', title: 'Transfer Out' },
  ];
  
}
