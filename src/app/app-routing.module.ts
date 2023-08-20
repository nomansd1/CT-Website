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
import { HcmLayoutComponent } from './components/hcm+/hcm-layout/hcm-layout.component';
import { ImpLayoutComponent } from './components/import/imp-layout/imp-layout.component';
import { PossLayoutComponent } from './components/pos-select/poss-layout/poss-layout.component';
import { PosxLayoutComponent } from './components/pos-xtreme/posx-layout/posx-layout.component';
import { ProdLayoutComponent } from './components/production+/prod-layout/prod-layout.component';
import { PrimaryLayoutComponent } from './components/primary+/primary-layout/primary-layout.component';
import { SndLayoutComponent } from './components/s&d-next/snd-layout/snd-layout.component';
import { SndeLayoutComponent } from './components/s&d-esuite/snde-layout/snde-layout.component';
import { ScmLayoutComponent } from './components/scn+/scm-layout/scm-layout.component';
import { WmsLayoutComponent } from './components/wms-extended/wms-layout/wms-layout.component';
import { CustomersLayoutComponent } from './components/customers/customers-layout/customers-layout.component';
import { OmLayoutComponent } from './components/other-modules/om-layout/om-layout.component';

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
  { path: 'softwares/hcm', component: HcmLayoutComponent },
  { path: 'softwares/import', component: ImpLayoutComponent },
  { path: 'softwares/pos%select', component: PossLayoutComponent },
  { path: 'softwares/pos%xtreme', component: PosxLayoutComponent },
  { path: 'softwares/production', component: ProdLayoutComponent },
  { path: 'softwares/primary', component: PrimaryLayoutComponent },
  { path: 'softwares/s&d%next', component: SndLayoutComponent },
  { path: 'softwares/s&d%esuite', component: SndeLayoutComponent },
  { path: 'softwares/scm' , component: ScmLayoutComponent },
  { path: 'softwares/wms', component: WmsLayoutComponent },
  { path: 'softwares/om', component: OmLayoutComponent },
  { path: 'customers', component: CustomersLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
