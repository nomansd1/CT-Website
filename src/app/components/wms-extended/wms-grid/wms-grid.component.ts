import { Component } from '@angular/core';

@Component({
  selector: 'app-wms-grid',
  templateUrl: './wms-grid.component.html',
  styleUrls: ['./wms-grid.component.css']
})
export class WmsGridComponent {
  tiles = [
    { url: '../../../../assets/wms1.png', title: 'cloud based app' },
    { url: '../../../../assets/wms2.png', title: 'andriod devices support' },
    { url: '../../../../assets/wms3.png', title: 'easy product traceability' },
    { url: '../../../../assets/wms4.png', title: 'fully monitored WH operations' },
    { url: '../../../../assets/wms5.png', title: 'reduced operational cost' },
    { url: '../../../../assets/wms6.png', title: 'accurate stock control' },
    { url: '../../../../assets/wms7.png', title: 'automatic palletizing' },
    { url: '../../../../assets/wms8.png', title: 'batch & expiry tracking' },
    { url: '../../../../assets/wms9.png', title: 'OCR for batch reading' },
    { url: '../../../../assets/wms10.png', title: 'Power BI dashboards' },
    { url: '../../../../assets/wms11.png', title: 'system based audit' },
    { url: '../../../../assets/wms12.png', title: 'delivery & collection' },
    { url: '../../../../assets/wms13.png', title: 'MRP on forecast basis' },
    { url: '../../../../assets/wms14.png', title: 'system suggested warehouse space' },
  ]
  tiles2 = [
    { url: '../../../../assets/wms15.png', title: 'arrival' },
    { url: '../../../../assets/wms16.png', title: 'inspection' },
    { url: '../../../../assets/wms17.png', title: 'stock recieving' },
    { url: '../../../../assets/wms18.png', title: 'put away' },
    { url: '../../../../assets/wms19.png', title: 'docking' },
  ]
  tiles3 = [
    { url: '../../../../assets/wms20.png', title: 'stock picking' },
    { url: '../../../../assets/wms21.png', title: 'customer wise segregation' },
    { url: '../../../../assets/wms22.png', title: 'digital signature on dispatch' },
    { url: '../../../../assets/wms23.png', title: 'shipment to customer' },
  ]
}
