import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from 'src/app/services/email.service';



@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent {
  
  productName: string | null = null;
  
  name!: string;
  businessEmail!: string;
  country!: string;
  contact!: string;
  company!: string;
  industry!: string;
  solutions: any;
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

  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService
    ) {}

  ngOnInit(): void {
    // Retrieve the product name from the route parameters
    this.route.params.subscribe(params => {
      this.productName = params['productName'] || null;
    });
    this.solutions = this.productName;
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

  onSubmit() {
    // Get the form values
    const formData = {
      CompanyCode: 61,
      OfficeCode: 100061,
      Subject: 'Testing Email API',
      CC: 'mailto:erumazam3397@gmail.com',
      FromNames: 'mailto:noreply@cloudtenants.com',
      ToNames: 'mailto:erum.azam@cloudtenants.com',
      Body: 'This is the email body.',
      Tempalte: 'Default',
      KeyValuesData: {
        Name: this.name,
        Email: this.businessEmail,
        Country: this.country,
        Company: this.company,
        Industry: this.industry,
        Solution: this.solutions,
        Message: this.message
      }
    };

    // Call the email service to send the email
    this.emailService.sendEmail(formData).subscribe(
      (response) => {
        console.log('Email sent successfully!', response);
        // You can handle the response here (e.g., show a success message)
      },
      (error) => {
        console.error('Error sending email:', error);
        // You can handle the error here (e.g., show an error message)
      }
    );
  }
}