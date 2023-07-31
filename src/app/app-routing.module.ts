import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexLayoutComponent } from './components/index/index-layout/index-layout.component';
import { AboutLayoutComponent } from './components/about/about-layout/about-layout.component';
import { CareersLayoutComponent } from './components/careers/careers-layout/careers-layout.component';
import { DemoLayoutComponent } from './components/demo/demo-layout/demo-layout.component';
import { TechnologyLayoutComponent } from './components/technologies/technology-layout/technology-layout.component';
import { PartnerLayoutComponent } from './components/partner/partner-layout/partner-layout.component';
import { AlliancesLayoutComponent } from './components/alliances/alliances-layout/alliances-layout.component';
import { NetworkLayoutComponent } from './components/networks/network-layout/network-layout.component';
import { OnboardingLayoutComponent } from './components/onboarding/onboarding-layout/onboarding-layout.component';
import { SupportLayoutComponent } from './components/support/support-layout/support-layout.component';
import { SoftwareLayoutComponent } from './components/softwares/software-layout/software-layout.component';
import { FinanceLayoutComponent } from './components/finance+/finance-layout/finance-layout.component';

const routes: Routes = [
  { path: '', component: IndexLayoutComponent },
  { path: 'about', component: AboutLayoutComponent },
  { path: 'careers', component: CareersLayoutComponent },
  { path: 'demo', component: DemoLayoutComponent },
  { path: 'demo/:productName', component: DemoLayoutComponent },
  { path: 'technologies', component: TechnologyLayoutComponent },
  { path: 'partner', component: PartnerLayoutComponent },
  { path: 'alliances', component: AlliancesLayoutComponent },
  { path: 'networks', component: NetworkLayoutComponent },
  { path: 'boarding', component: OnboardingLayoutComponent },
  { path: 'support', component: SupportLayoutComponent },
  { path: 'softwares', component: SoftwareLayoutComponent },
  { path: 'softwares/finance', component: FinanceLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
