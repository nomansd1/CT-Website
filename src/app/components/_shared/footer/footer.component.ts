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
    ]

  
  quickLinks = [
    { title: 'About', url: '' },
    { title: 'Softwares', url: '' },
    { title: 'Careers', url: '' },
    { title: 'Become a partner', url: '' },
    { title: "FAQ's", url: '' },
  ]
  
  contactInfo = [
    { label: 'PAK:', val: '+92 2134971995' },
    { label: 'KSA', val: '+966 1146 6664 101' },
    { label: 'UAE:', val: '+971 55 548 8093' },
    { label: 'Email:', val: 'sales@cloudtenants.com' },
  ]
  
  officeInfo = [
    { val: 'Suit No B-5/4, FL-9/6 (Junaid Plaza),' },
    { val: 'Gulshan-E-Iqbal Block 6,' },
    { val: 'Main Rashid Minhas Road,' },
    { val: 'Karachi-75300, Pakistan.' },
  ]
}
