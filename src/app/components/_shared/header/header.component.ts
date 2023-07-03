import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  navbar = false


  toggleNavbar() {
    this.navbar = !this.navbar;
  }
}
