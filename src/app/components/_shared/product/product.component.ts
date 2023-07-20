import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  @Input() ourProducts: any;

  constructor( private router: Router ) {}
  
ngOnInit(): void {
  console.log(this.ourProducts.label);
  
}

  navigateToDemo(productName: string) {
    this.router.navigate([`/demo/`, productName]);
  }
}
