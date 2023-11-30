import { Component } from '@angular/core';

@Component({
  selector: 'app-hcm-grid',
  templateUrl: './hcm-grid.component.html',
  styleUrls: ['./hcm-grid.component.css']
})
export class HcmGridComponent {
  tiles =[
    { url: '../../../../assets/hcm1.png', title: 'Cloud-based app' },
    { url: '../../../../assets/hcm2.png', title: 'Works in a live environment' },
    { url: '../../../../assets/hcm3.png', title: 'Recruitment' },
    { url: '../../../../assets/hcm4.png', title: 'Employee Information' },
    { url: '../../../../assets/hcm5.png', title: 'Salary Definition' },
    { url: '../../../../assets/hcm6.png', title: 'Leaves Management' },
    { url: '../../../../assets/hcm7.png', title: 'Provident Fund' },
    { url: '../../../../assets/hcm8.png', title: 'Appraisal' },
    { url: '../../../../assets/hcm9.png', title: 'Income Tax' },
    { url: '../../../../assets/hcm10.png', title: 'Separation' },
    { url: '../../../../assets/hcm11.png', title: 'Full & Final Settlement' },
    { url: '../../../../assets/hcm12.png', title: 'Loan & Advances' },
    { url: '../../../../assets/hcm13.png', title: 'Biometric & Face Recognition Devices Integration' },
    { url: '../../../../assets/hcm14.png', title: 'Customized Letters' },
    { url: '../../../../assets/hcm15.png', title: 'Real-Time Reporting' },
    { url: '../../../../assets/hcm16.png', title: 'Business Intelligence Reports & Static Reports' },
    { url: '../../../../assets/hcm17.png', title: 'MS Power BI Dashboard' },
  ]
  tiles2 = [
    { url: '../../../../assets/hcm18.png', title: 'Employee Information' },
    { url: '../../../../assets/hcm19.png', title: 'Month-wise Salary Summary' },
    { url: '../../../../assets/hcm20.png', title: 'Leaves Application' },
    { url: '../../../../assets/hcm21.png', title: 'Attendance Review' },
    { url: '../../../../assets/hcm22.png', title: 'Attendance Adjustments' },
    { url: '../../../../assets/hcm23.png', title: 'PF Ledger' },
  ]
}
