import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-primary-banner',
  templateUrl: './primary-banner.component.html',
  styleUrls: ['./primary-banner.component.css']
})
export class PrimaryBannerComponent {
  constructor(private scrollService: ScrollService) {}

  scroll() {
    this.scrollService.scroll()
  }
}
