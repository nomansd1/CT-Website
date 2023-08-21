import { Component } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-partner-form',
  templateUrl: './partner-form.component.html',
  styleUrls: ['./partner-form.component.css']
})
export class PartnerFormComponent {
  name = '';
  contact = '';
  email = '';
  company = '';
  designation = '';
  message = '';

  validateMessage = { 
    msg: 'Please fill out the missing fields',
    state: false
  };
  successMessage = {
    msg: `Thank You for Contacting Us!\n We have received your message and will get back to you shortly.`,
    state: false
  }

  constructor(
    private emailService: EmailService
    ) {}

    onSubmit() {
      if (this.isFormValid() == false) {
        this.validateMessage.state = true;
        return;
      }
      // Get the form values
      const formData = {
        CompanyCode: 61,
        OfficeCode: 100061,
        Subject: 'Partner Request',
        CC: 'ahsan.siraj@cloudtenants.com',
        FromNames: 'noreply@cloudtenants.com',
        ToNames: 'partners@cloudtenants.com',
        Body: '',
        Template: 'PARTNER_REQUEST',
        KeyValuesData: {
          Name: this.name,
          Email: this.email,
          Contact: this.contact,
          Company: this.company,
          Designation: this.designation,
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
      let validEmail = this.email.length != 0;
      let validCompany = this.company.length != 0;
      let validDesignation = this.designation.length != 0;
      let validContact = this.contact.length != 0;
      let validMessage = this.message.length != 0;
      return ( validName && validEmail && validCompany && validContact && validDesignation && validMessage )
    }
}
