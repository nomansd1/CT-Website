import { Component } from '@angular/core';

@Component({
  selector: 'app-wms-grid',
  templateUrl: './wms-grid.component.html',
  styleUrls: ['./wms-grid.component.css']
})
export class WmsGridComponent {
  tiles = [
    { url: '../../../../assets/wms1.png', title: 'Cloud-based solution' },
    { url: '../../../../assets/wms2.png', title: 'Android Devices Support' },
    { url: '../../../../assets/wms3.png', title: 'Easy Product Traceability' },
    { url: '../../../../assets/wms4.png', title: 'Fully Monitored Warehouse Operations' },
    { url: '../../../../assets/wms5.png', title: 'Reduced Operational Cost' },
    { url: '../../../../assets/wms6.png', title: 'Accurate Stock Control' },
    { url: '../../../../assets/wms7.png', title: 'Automatic Palletizing' },
    { url: '../../../../assets/wms8.png', title: 'Batch and Expiry Tracking' },
    { url: '../../../../assets/wms9.png', title: 'OCR for Batch Reading' },
    { url: '../../../../assets/wms13.png', title: 'MRP on Forecast Basis' },
    { url: '../../../../assets/wms14.png', title: 'System Suggested Warehouse Space' },
    { url: '../../../../assets/wms11.png', title: 'System-Based Audit' },
    { url: '../../../../assets/wms12.png', title: 'Delivery & Collection' },
    { url: 'assets/hcm15.png', title: 'Real-Time Reporting' },
    { url: 'assets/hcm16.png', title: 'Business Intelligence Reports & Static Reports' },
    { url: 'assets/hcm17.png', title: 'MS Power BI Dashboard' },
  ];
  
  tiles2 = [
    { url: '../../../../assets/wms15.png', title: 'Arrival' },
    { url: '../../../../assets/wms16.png', title: 'Inspection' },
    { url: '../../../../assets/wms17.png', title: 'Stock Receiving' },
    { url: '../../../../assets/wms18.png', title: 'Put Away' },
    { url: '../../../../assets/wms19.png', title: 'Docking' },
  ];
  
  tiles3 = [
    { url: '../../../../assets/wms20.png', title: 'Stock Picking' },
    { url: '../../../../assets/wms21.png', title: 'Customer-wise Segregation' },
    { url: '../../../../assets/wms22.png', title: 'Digital Signature on Dispatch' },
    { url: '../../../../assets/wms23.png', title: 'Shipment to Customer' },
  ];
  
}
