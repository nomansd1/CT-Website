import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-alliances-banner',
  templateUrl: './alliances-banner.component.html',
  styleUrls: ['./alliances-banner.component.css']
})
export class AlliancesBannerComponent {
  constructor(private scrollService: ScrollService) {}

  scroll() {
    this.scrollService.scroll()
  }
}
