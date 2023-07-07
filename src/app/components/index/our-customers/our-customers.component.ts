import { Component } from '@angular/core';

@Component({
  selector: 'app-our-customers',
  templateUrl: './our-customers.component.html',
  styleUrls: ['./our-customers.component.css']
})
export class OurCustomersComponent {
  customerGridTiles1 =[
    { imgSource: '../../../../assets/c1.png' },
    { imgSource: '../../../../assets/c2.png' },
    { imgSource: '../../../../assets/c3.png' },
    { imgSource: '../../../../assets/c4.png' },
    { imgSource: '../../../../assets/c5.png' },
  ]
  customerGridTiles2 =[
    { imgSource: '../../../../assets/c6.png' },
    { imgSource: '../../../../assets/c7.png' },
    { imgSource: '../../../../assets/c8.png' },
    { imgSource: '../../../../assets/c9.png' },
    { imgSource: '../../../../assets/c10.png' },
  ]
}
