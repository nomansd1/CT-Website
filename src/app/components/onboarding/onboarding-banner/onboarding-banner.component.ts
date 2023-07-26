import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-onboarding-banner',
  templateUrl: './onboarding-banner.component.html',
  styleUrls: ['./onboarding-banner.component.css']
})
export class OnboardingBannerComponent {
  constructor(private scrollService: ScrollService) {}

  scroll() {
    this.scrollService.scroll()
  }
}
