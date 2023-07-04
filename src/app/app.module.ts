import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/_shared/header/header.component';
import { BannerComponent } from './components/index/banner/banner.component';
import { AboutComponent } from './components/index/about/about.component';
import { OurServicesComponent } from './components/index/our-services/our-services.component';
import { OurEdgesComponent } from './components/index/our-edges/our-edges.component';
import { AppsComponent } from './components/index/apps/apps.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    OurServicesComponent,
    OurEdgesComponent,
    AppsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
