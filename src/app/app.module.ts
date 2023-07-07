import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/_shared/header/header.component';
import { BannerComponent } from './components/index/banner/banner.component';
import { AboutComponent } from './components/index/about/about.component';
import { OurServicesComponent } from './components/index/our-services/our-services.component';
import { OurEdgesComponent } from './components/index/our-edges/our-edges.component';
import { AppsComponent } from './components/index/apps/apps.component';
import { OurProductsComponent } from './components/index/our-products/our-products.component';
import { ProductComponent } from './components/_shared/product/product.component';
import { OurCustomersComponent } from './components/index/our-customers/our-customers.component';
import { FooterComponent } from './components/_shared/footer/footer.component';
import { IndexLayoutComponent } from './components/index/index-layout/index-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { CareersLayoutComponent } from './components/careers/careers-layout/careers-layout.component';
import { AboutLayoutComponent } from './components/about/about-layout/about-layout.component';
import { CareerBannerComponent } from './components/careers/career-banner/career-banner.component';
import { VacanciesComponent } from './components/careers/vacancies/vacancies.component';
import { AboutBannerComponent } from './components/about/about-banner/about-banner.component';
import { AboutInfoComponent } from './components/about/about-info/about-info.component';
import { OurValuesComponent } from './components/about/our-values/our-values.component';
import { OurMissionComponent } from './components/about/our-mission/our-mission.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    OurServicesComponent,
    OurEdgesComponent,
    AppsComponent,
    OurProductsComponent,
    ProductComponent,
    OurCustomersComponent,
    FooterComponent,
    IndexLayoutComponent,
    CareersLayoutComponent,
    AboutLayoutComponent,
    CareerBannerComponent,
    VacanciesComponent,
    AboutBannerComponent,
    AboutInfoComponent,
    OurValuesComponent,
    OurMissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
