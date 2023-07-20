import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexLayoutComponent } from './components/index/index-layout/index-layout.component';
import { AboutLayoutComponent } from './components/about/about-layout/about-layout.component';
import { CareersLayoutComponent } from './components/careers/careers-layout/careers-layout.component';
import { DemoLayoutComponent } from './components/demo/demo-layout/demo-layout.component';
import { TechnologyLayoutComponent } from './components/technologies/technology-layout/technology-layout.component';
import { PartnerLayoutComponent } from './components/partner/partner-layout/partner-layout.component';
import { AlliancesLayoutComponent } from './components/alliances/alliances-layout/alliances-layout.component';

const routes: Routes = [
  { path: '', component: IndexLayoutComponent },
  { path: 'about', component: AboutLayoutComponent },
  { path: 'careers', component: CareersLayoutComponent },
  { path: 'demo', component: DemoLayoutComponent },
  { path: 'demo/:productName', component: DemoLayoutComponent },
  { path: 'technologies', component: TechnologyLayoutComponent },
  { path: 'partner', component: PartnerLayoutComponent },
  { path: 'alliances', component: AlliancesLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
