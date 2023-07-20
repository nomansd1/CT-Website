import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent {
  
  name!: string;
  businessEmail!: string;
  country!: string;
  contact!: string;
  company!: string;
  industry!: string;
  solutions!: string;
  message!: string;

  demoOptions = [
    'S&D Next',
    'S&D e-suite',
    'POS Xtreme',
    'POS Select',
    'WMS Extended',
    'SCM+',
    'HCM+',
    'Finance+',
    'Production+',
    'Import+',
    'Primary+',
  ]
  productName: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve the product name from the route parameters
    this.route.params.subscribe(params => {
      this.productName = params['productName'] || null;
    });
    console.log(this.productName); 
  }

  submit() {
    console.log('name', this.name);
    console.log('b email', this.businessEmail);
    console.log('country', this.country);
    console.log('company', this.company);
    console.log('industry', this.industry);
    console.log('solutions', this.solutions);
    console.log('message', this.message);
    
  }
}