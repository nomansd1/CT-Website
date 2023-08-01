import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-wms-banner',
  templateUrl: './wms-banner.component.html',
  styleUrls: ['./wms-banner.component.css']
})
export class WmsBannerComponent {
  constructor(private scrollService: ScrollService) {}

  scroll() {
    this.scrollService.scroll()
  }
}
