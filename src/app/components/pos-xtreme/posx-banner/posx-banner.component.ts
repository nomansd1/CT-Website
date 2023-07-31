import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-posx-banner',
  templateUrl: './posx-banner.component.html',
  styleUrls: ['./posx-banner.component.css']
})
export class PosxBannerComponent {
  constructor(private scrollService: ScrollService) {}

  scroll() {
    this.scrollService.scroll()
  }
}
