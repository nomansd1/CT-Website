import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-poss-banner',
  templateUrl: './poss-banner.component.html',
  styleUrls: ['./poss-banner.component.css']
})
export class PossBannerComponent {
  constructor(private scrollService: ScrollService) {}

  scroll() {
    this.scrollService.scroll()
  }
}
