import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-finance-banner',
  templateUrl: './finance-banner.component.html',
  styleUrls: ['./finance-banner.component.css']
})
export class FinanceBannerComponent {
  constructor(private scrollService: ScrollService) {}

  scroll() {
    this.scrollService.scroll()
  }
}
