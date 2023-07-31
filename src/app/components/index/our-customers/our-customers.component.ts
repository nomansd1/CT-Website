import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-our-customers',
  templateUrl: './our-customers.component.html',
  styleUrls: ['./our-customers.component.css']
})
export class OurCustomersComponent {

  customOptions: OwlOptions = {
    loop: true,
    items: 5,
    dots: false,
    slideTransition: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayTimeout: 9999,
    autoplayHoverPause: false,
    margin: 30,
    freeDrag: true,
    nav: false
  }

  customOptions2: OwlOptions = {
    loop: true,
    items: 5,
    dots: false,
    rtl: true,
    slideTransition: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayTimeout: 9999,
    autoplayHoverPause: false,
    margin: 30,
    freeDrag: true,
    nav: false
  }

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
