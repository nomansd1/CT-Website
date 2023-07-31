import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-snd-banner',
  templateUrl: './snd-banner.component.html',
  styleUrls: ['./snd-banner.component.css']
})
export class SndBannerComponent {
  constructor(private scrollService: ScrollService) {}

  scroll() {
    this.scrollService.scroll()
  }
}
