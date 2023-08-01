import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-scm-banner',
  templateUrl: './scm-banner.component.html',
  styleUrls: ['./scm-banner.component.css']
})
export class ScmBannerComponent {
  constructor(private scrollService: ScrollService) {}

  scroll() {
    this.scrollService.scroll()
  }
}
