import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-customers-banner',
  templateUrl: './customers-banner.component.html',
  styleUrls: ['./customers-banner.component.css']
})
export class CustomersBannerComponent {
  constructor(private scrollService: ScrollService) {}

  scroll() {
    this.scrollService.scroll()
  }
}
