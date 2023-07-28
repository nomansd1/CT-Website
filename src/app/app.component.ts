import { AfterViewInit, Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  isLoading: boolean = true;
  sidebarVisible = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 100); 
  }
  ngAfterViewInit(): void {
    register();
  }

  onToggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
    console.log('sidebarVisible:', this.sidebarVisible);
  }
}
