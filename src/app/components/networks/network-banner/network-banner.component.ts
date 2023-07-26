import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-network-banner',
  templateUrl: './network-banner.component.html',
  styleUrls: ['./network-banner.component.css']
})
export class NetworkBannerComponent {
  constructor(private scrollService: ScrollService) {}

  scroll() {
    this.scrollService.scroll()
  }
}
