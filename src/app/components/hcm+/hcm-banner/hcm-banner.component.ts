import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-hcm-banner',
  templateUrl: './hcm-banner.component.html',
  styleUrls: ['./hcm-banner.component.css']
})
export class HcmBannerComponent {
  constructor(private scrollService: ScrollService) {}

  scroll() {
    this.scrollService.scroll()
  }
}
