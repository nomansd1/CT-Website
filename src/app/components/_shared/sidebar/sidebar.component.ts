import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() sidebarVisible = false;
  navLinks = [
    { title: 'Home', url: '' },
    { title: 'About Us', url: 'about' },
    { title: 'Services Network', url: 'networks' },
    { title: 'Softwares', url: 'softwares' },
    { title: 'Customers', url: 'customers' },
    { title: 'Alliances', url: 'alliances' },
    { title: 'Careers', url: 'careers' },
  ]
  contactInfo = [
    { label: 'PAK:', val: '+92 2134971995' },
    { label: 'KSA', val: '+966 1146 6664 101' },
    { label: 'UAE:', val: '+971 55 548 8093' },
    { label: 'QAT:', val: '+974 5573 0350' },
    { label: 'Email:', val: 'sales@cloudtenants.com' },
  ]
  onToggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible
  }
}
