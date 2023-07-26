import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-software-banner',
  templateUrl: './software-banner.component.html',
  styleUrls: ['./software-banner.component.css']
})
export class SoftwareBannerComponent {
  constructor(private scrollService: ScrollService) {}

  scroll() {
    this.scrollService.scroll()
  }
}
