import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-imp-banner',
  templateUrl: './imp-banner.component.html',
  styleUrls: ['./imp-banner.component.css']
})
export class ImpBannerComponent {
  constructor(private scrollService: ScrollService) {}

  scroll() {
    this.scrollService.scroll()
  }
}
