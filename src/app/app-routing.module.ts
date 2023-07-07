import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexLayoutComponent } from './components/index/index-layout/index-layout.component';
import { AboutLayoutComponent } from './components/about/about-layout/about-layout.component';
import { CareersLayoutComponent } from './components/careers/careers-layout/careers-layout.component';

const routes: Routes = [
  { path: '', component: IndexLayoutComponent },
  { path: 'about', component: AboutLayoutComponent },
  { path: 'careers', component: CareersLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
