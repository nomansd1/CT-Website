import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-snde-banner',
  templateUrl: './snde-banner.component.html',
  styleUrls: ['./snde-banner.component.css']
})
export class SndeBannerComponent {
  constructor(private scrollService: ScrollService) {}

  scroll() {
    this.scrollService.scroll()
  }
}