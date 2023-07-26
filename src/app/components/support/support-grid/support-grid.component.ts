import { Component } from '@angular/core';

@Component({
  selector: 'app-support-grid',
  templateUrl: './support-grid.component.html',
  styleUrls: ['./support-grid.component.css']
})
export class SupportGridComponent {
  services = [
    { title: 'Unlimited Support Tickets', url: '../../../../assets/sp1.png' },
    { title: 'Customizations in purchased modules', url: '../../../../assets/sp2.png' },
  ]
  supportMediums = [
    { title: 'service desk portal', url: '../../../../assets/sp3.png' },
    { title: 'Whatsapp', url: '../../../../assets/sp4.png' },
    { title: 'skype', url: '../../../../assets/sp5.png' },
    { title: 'email', url: '../../../../assets/sp6.png' },
    { title: 'live call', url: '../../../../assets/sp7.png' },
    { title: 'on site', url: '../../../../assets/sp8.png' },
  ]
}
