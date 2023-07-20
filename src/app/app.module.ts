import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountUpModule } from 'ngx-countup';
import { FormsModule } from '@angular/forms';

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
import { DemoLayoutComponent } from './components/demo/demo-layout/demo-layout.component';
import { DemoBannerComponent } from './components/demo/demo-banner/demo-banner.component';
import { DemoFormComponent } from './components/demo/demo-form/demo-form.component';
import { TechnologyLayoutComponent } from './components/technologies/technology-layout/technology-layout.component';
import { TechnologyBannerComponent } from './components/technologies/technology-banner/technology-banner.component';
import { TechGridComponent } from './components/technologies/tech-grid/tech-grid.component';
import { PartnerLayoutComponent } from './components/partner/partner-layout/partner-layout.component';
import { PartnerBannerComponent } from './components/partner/partner-banner/partner-banner.component';
import { PartnerFormComponent } from './components/partner/partner-form/partner-form.component';
import { AlliancesBannerComponent } from './components/alliances/alliances-banner/alliances-banner.component';
import { AlliancesLayoutComponent } from './components/alliances/alliances-layout/alliances-layout.component';
import { AlliancesGridComponent } from './components/alliances/alliances-grid/alliances-grid.component';

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
    OurMissionComponent,
    DemoLayoutComponent,
    DemoBannerComponent,
    DemoFormComponent,
    TechnologyLayoutComponent,
    TechnologyBannerComponent,
    TechGridComponent,
    PartnerLayoutComponent,
    PartnerBannerComponent,
    PartnerFormComponent,
    AlliancesBannerComponent,
    AlliancesLayoutComponent,
    AlliancesGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountUpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
