import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-support-banner',
  templateUrl: './support-banner.component.html',
  styleUrls: ['./support-banner.component.css']
})
export class SupportBannerComponent {

  constructor(private scrollService: ScrollService) {}

  scroll() {
    this.scrollService.scroll()
  }
}
