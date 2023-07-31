import { Component } from '@angular/core';

@Component({
  selector: 'app-hcm-grid',
  templateUrl: './hcm-grid.component.html',
  styleUrls: ['./hcm-grid.component.css']
})
export class HcmGridComponent {
  tiles =[
    { url: '../../../../assets/hcm1.png', title: 'cloud based app' },
    { url: '../../../../assets/hcm2.png', title: 'works in live environment' },
    { url: '../../../../assets/hcm3.png', title: 'recruitment' },
    { url: '../../../../assets/hcm4.png', title: 'employee information' },
    { url: '../../../../assets/hcm5.png', title: 'salary definition' },
    { url: '../../../../assets/hcm6.png', title: 'leaves management' },
    { url: '../../../../assets/hcm7.png', title: 'provident fund' },
    { url: '../../../../assets/hcm8.png', title: 'appraisal' },
    { url: '../../../../assets/hcm9.png', title: 'income tax' },
    { url: '../../../../assets/hcm10.png', title: 'separation' },
    { url: '../../../../assets/hcm11.png', title: 'full & final settlement' },
    { url: '../../../../assets/hcm12.png', title: 'loan & advances' },
    { url: '../../../../assets/hcm13.png', title: 'biometric & face recognition devices integration' },
    { url: '../../../../assets/hcm14.png', title: 'customized letters' },
    { url: '../../../../assets/hcm15.png', title: 'real time reporting' },
    { url: '../../../../assets/hcm16.png', title: 'business intelligence reports & static reports' },
    { url: '../../../../assets/hcm17.png', title: 'MS power BI dashboard' },
  ]
  tiles2 = [
    { url: '../../../../assets/hcm18.png', title: 'employee information' },
    { url: '../../../../assets/hcm19.png', title: 'monthwise salary summary' },
    { url: '../../../../assets/hcm20.png', title: 'leaves info' },
    { url: '../../../../assets/hcm21.png', title: 'attendance review' },
    { url: '../../../../assets/hcm22.png', title: 'attendance adjustments' },
    { url: '../../../../assets/hcm23.png', title: 'PF ledger' },
  ]
}
