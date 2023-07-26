import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-career-banner',
  templateUrl: './career-banner.component.html',
  styleUrls: ['./career-banner.component.css']
})
export class CareerBannerComponent {
  constructor(private scrollService: ScrollService) {}

  scroll() {
    this.scrollService.scroll()
  }
}
