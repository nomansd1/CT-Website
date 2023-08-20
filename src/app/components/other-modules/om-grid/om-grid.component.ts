import { Component } from '@angular/core';

@Component({
  selector: 'app-om-grid',
  templateUrl: './om-grid.component.html',
  styleUrls: ['./om-grid.component.css']
})
export class OmGridComponent {
  tiles =[
    { url: '../../../../assets/om1.png', title: 'dairy farm ERP' },
    { url: '../../../../assets/om2.png', title: 'sugar manufacturing ERP' },
    { url: '../../../../assets/om3.png', title: 'hospital management ERP' },
    { url: '../../../../assets/om4.png', title: 'school management ERP' },
    { url: '../../../../assets/om5.png', title: 'welfare organization ERP' },
  ]
}
