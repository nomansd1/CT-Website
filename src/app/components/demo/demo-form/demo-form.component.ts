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
  
  name: string = '';
  businessEmail: string = '';
  country: string = '';
  contact: string = '';
  company: string = '';
  industry: string = '';
  solutions: any;
  message: string = '';

  labels: any;

  demoOptions = [
    'S&D Next (Sales & Distribution)',
    'S&D e-suite (Sales & Distribution)',
    'POS Xtreme (Point of Solution for Shops & Supermarkets)',
    'POS Select (Point of Solution for Food & Resturants Chain)',
    'WMS Extended (Warehouse Management System)',
    'SCM+ (Supply Chain Management)',
    'HCM+ (Human Capital Management)',
    'Finance+',
    'Production+',
    'Import+',
    'Primary+ (Primary Sales)',
  ]

  validateMessage = { 
    msg: 'Please fill out the missing fields',
    state: false
  };
  successMessage = {
    msg: `Thank You for Contacting Us!\n We have received your message and will get back to you shortly.`,
    state: false
  }

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
  }

  onSubmit() {
    if (this.isFormValid() == false) {
      this.validateMessage.state = true;
      return;
    }
    if (this.productName == null) {
      this.solutions = this.solutions.map(option => option.$ngOptionLabel).join(', ');
      console.log('solutions',this.solutions);
      console.log(this.labels);
    }
    
    // Get the form values
    const formData = {
      CompanyCode: 61,
      OfficeCode: 100061,
      Subject: 'Software Demo Request',
      CC: 'noman.sd114@gmail.com',
      FromNames: 'noreply@cloudtenants.com',
      ToNames: 'noman.ali@cloudtenants.com',
      Body: '',
      Template: 'DEMO_REQUEST',
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
    this.validateMessage.state = false;
    this.successMessage.state = true;
  }

  isFormValid(): boolean {
    let validName = this.name.length != 0;
    let validEmail2 = this.businessEmail.length != 0;
    let validCompany = this.company.length != 0;
    let validContact = this.contact.length != 0;
    let validCountry = this.country.length != 0;
    let validIndustry = this.industry.length != 0;
    let validMessage = this.message.length != 0;
    let validSolutions = this.solutions != undefined;
    return ( validName && validEmail2 && validCompany && validContact && validCountry && validIndustry && validMessage && validSolutions )
  }
}