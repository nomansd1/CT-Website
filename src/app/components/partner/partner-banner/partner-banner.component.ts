import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-partner-banner',
  templateUrl: './partner-banner.component.html',
  styleUrls: ['./partner-banner.component.css']
})
export class PartnerBannerComponent {
  constructor(private scrollService: ScrollService) {}

  scroll() {
    this.scrollService.scroll()
  }
}
