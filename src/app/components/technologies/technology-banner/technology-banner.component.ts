import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-technology-banner',
  templateUrl: './technology-banner.component.html',
  styleUrls: ['./technology-banner.component.css']
})
export class TechnologyBannerComponent {
  constructor(private scrollService: ScrollService) {}

  scroll() {
    this.scrollService.scroll()
  }
}
