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
    ) {
      console.log(this,this.successMessage);
      
    }

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
      console.log("validation condition is running");
      
      return;
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
    this.successMessage.state = true;
  }

  isFormValid(): boolean {
    const emailExpression: RegExp = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
    let validEmail = emailExpression.test(this.businessEmail);
    let validName = this.name.length == 0;
    let validEmail2 = this.businessEmail.length == 0;
    let validCompany = this.company.length == 0;
    let validContact = this.contact.length == 0;
    let validCountry = this.country.length == 0;
    let validIndustry = this.industry.length == 0;
    let validMessage = this.message.length == 0;

    console.log("email: ", this,this.businessEmail);
    console.log("name: ", this.name);
    console.log("company: ", this.company);
    console.log("country: ", this.country);
    console.log("industry: ", this.industry);
    console.log("message: ", this.message);
    console.log("contact: ", this.contact);
    
    console.log("before submit");
    console.log("email: ",validEmail);
    console.log("email empty: ",validEmail2);
    console.log("name: ",validName);
    console.log("company: ",validCompany);
    console.log("country: ",validCountry);
    console.log("industry: ",validIndustry);
    console.log("message: ",validMessage);
    console.log("contact: ",validContact);

    
    return (validEmail && validName && validEmail2 && validCompany && validContact && validCountry && validIndustry && validMessage)
  }
}