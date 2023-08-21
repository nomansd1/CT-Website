import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    partnersIcons = [
      { source: '../../../../assets/p1.png' },
      { source: '../../../../assets/p2.png' },
      { source: '../../../../assets/p3.png' },
      { source: '../../../../assets/p4.png' },
      { source: '../../../../assets/p5.png' },
      { source: '../../../../assets/p6.png' },
      { source: '../../../../assets/p7.png' },
      { source: '../../../../assets/p8.png' },
    ]

  
  quickLinks = [
    { title: 'About Us', url: 'about' },
    { title: 'Softwares', url: 'softwares' },
    { title: 'Careers', url: 'careers' },
    { title: 'Become a partner', url: 'partner' },
    { title: "FAQ's", url: '' },
  ]
  
  contactInfo = [
    { label: 'PAK:', val: '+92 213 497 1995' },
    { label: 'KSA:', val: '+96 659 427 4605' },
    { label: 'UAE:', val: '+971 55 548 8093' },
    { label: 'QATAR:', val: '+974 5573 0350' },
    { label: 'Email:', val: 'sales@cloudtenants.com' },
  ]
  
  officeInfo = [
    { val: 'Suit No B-5/4, FL-9/6 (Junaid Plaza),' },
    { val: 'Gulshan-E-Iqbal Block 6,' },
    { val: 'Main Rashid Minhas Road,' },
    { val: 'Karachi-75300, Pakistan.' },
  ]
}
