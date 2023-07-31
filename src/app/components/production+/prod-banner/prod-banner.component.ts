import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-prod-banner',
  templateUrl: './prod-banner.component.html',
  styleUrls: ['./prod-banner.component.css']
})
export class ProdBannerComponent {
  constructor(private scrollService: ScrollService) {}

  scroll() {
    this.scrollService.scroll()
  }
}
