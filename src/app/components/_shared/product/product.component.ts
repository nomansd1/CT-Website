import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  @Input() ourProducts: any;

  constructor( public router: Router ) {}
  
ngOnInit(): void {
}

  navigateToDemo(productName: string) {
    this.router.navigate([`/demo/`, productName]);
  }

  navigateToProduct(productName: string) {
    this.router.navigate([`/softwares/`, productName]);
  }
}
