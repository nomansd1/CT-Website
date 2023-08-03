import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountUpModule } from 'ngx-countup';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { NetworkBannerComponent } from './components/networks/network-banner/network-banner.component';
import { NetworkLayoutComponent } from './components/networks/network-layout/network-layout.component';
import { NetworkGridComponent } from './components/networks/network-grid/network-grid.component';
import { OnboardingBannerComponent } from './components/onboarding/onboarding-banner/onboarding-banner.component';
import { OnboardingLayoutComponent } from './components/onboarding/onboarding-layout/onboarding-layout.component';
import { SupportLayoutComponent } from './components/support/support-layout/support-layout.component';
import { SupportBannerComponent } from './components/support/support-banner/support-banner.component';
import { SupportGridComponent } from './components/support/support-grid/support-grid.component';
import { SoftwareBannerComponent } from './components/softwares/software-banner/software-banner.component';
import { SoftwareLayoutComponent } from './components/softwares/software-layout/software-layout.component';
import { SoftwareGridComponent } from './components/softwares/software-grid/software-grid.component';
import { LoaderComponent } from './components/_shared/loader/loader.component';
import { SidebarComponent } from './components/_shared/sidebar/sidebar.component';
import { OnboardingProcessComponent } from './components/onboarding/onboarding-process/onboarding-process.component';
import { FinanceBannerComponent } from './components/finance+/finance-banner/finance-banner.component';
import { FinanceLayoutComponent } from './components/finance+/finance-layout/finance-layout.component';
import { FinanceGridComponent } from './components/finance+/finance-grid/finance-grid.component';
import { HcmLayoutComponent } from './components/hcm+/hcm-layout/hcm-layout.component';
import { HcmBannerComponent } from './components/hcm+/hcm-banner/hcm-banner.component';
import { HcmGridComponent } from './components/hcm+/hcm-grid/hcm-grid.component';
import { ImpLayoutComponent } from './components/import/imp-layout/imp-layout.component';
import { ImpBannerComponent } from './components/import/imp-banner/imp-banner.component';
import { ImpGridComponent } from './components/import/imp-grid/imp-grid.component';
import { PossLayoutComponent } from './components/pos-select/poss-layout/poss-layout.component';
import { PossBannerComponent } from './components/pos-select/poss-banner/poss-banner.component';
import { PossGridComponent } from './components/pos-select/poss-grid/poss-grid.component';
import { PosxLayoutComponent } from './components/pos-xtreme/posx-layout/posx-layout.component';
import { PosxBannerComponent } from './components/pos-xtreme/posx-banner/posx-banner.component';
import { PosxGridComponent } from './components/pos-xtreme/posx-grid/posx-grid.component';
import { ProdBannerComponent } from './components/production+/prod-banner/prod-banner.component';
import { ProdGridComponent } from './components/production+/prod-grid/prod-grid.component';
import { ProdLayoutComponent } from './components/production+/prod-layout/prod-layout.component';
import { PrimaryLayoutComponent } from './components/primary+/primary-layout/primary-layout.component';
import { PrimaryBannerComponent } from './components/primary+/primary-banner/primary-banner.component';
import { PrimaryGridComponent } from './components/primary+/primary-grid/primary-grid.component';
import { SndLayoutComponent } from './components/s&d-next/snd-layout/snd-layout.component';
import { SndBannerComponent } from './components/s&d-next/snd-banner/snd-banner.component';
import { SndGridComponent } from './components/s&d-next/snd-grid/snd-grid.component';
import { SndeLayoutComponent } from './components/s&d-esuite/snde-layout/snde-layout.component';
import { SndeBannerComponent } from './components/s&d-esuite/snde-banner/snde-banner.component';
import { SndeGridComponent } from './components/s&d-esuite/snde-grid/snde-grid.component';
import { ScmLayoutComponent } from './components/scn+/scm-layout/scm-layout.component';
import { ScmBannerComponent } from './components/scn+/scm-banner/scm-banner.component';
import { ScmGridComponent } from './components/scn+/scm-grid/scm-grid.component';
import { WmsLayoutComponent } from './components/wms-extended/wms-layout/wms-layout.component';
import { WmsBannerComponent } from './components/wms-extended/wms-banner/wms-banner.component';
import { WmsGridComponent } from './components/wms-extended/wms-grid/wms-grid.component';
import { CustomersLayoutComponent } from './components/customers/customers-layout/customers-layout.component';
import { CustomersBannerComponent } from './components/customers/customers-banner/customers-banner.component';
import { CustomersGridComponent } from './components/customers/customers-grid/customers-grid.component';

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
    AlliancesGridComponent,
    NetworkBannerComponent,
    NetworkLayoutComponent,
    NetworkGridComponent,
    OnboardingBannerComponent,
    OnboardingLayoutComponent,
    SupportLayoutComponent,
    SupportBannerComponent,
    SupportGridComponent,
    SoftwareBannerComponent,
    SoftwareLayoutComponent,
    SoftwareGridComponent,
    LoaderComponent,
    SidebarComponent,
    OnboardingProcessComponent,
    FinanceBannerComponent,
    FinanceLayoutComponent,
    FinanceGridComponent,
    HcmLayoutComponent,
    HcmBannerComponent,
    HcmGridComponent,
    ImpLayoutComponent,
    ImpBannerComponent,
    ImpGridComponent,
    PossLayoutComponent,
    PossBannerComponent,
    PossGridComponent,
    PosxLayoutComponent,
    PosxBannerComponent,
    PosxGridComponent,
    ProdBannerComponent,
    ProdGridComponent,
    ProdLayoutComponent,
    PrimaryLayoutComponent,
    PrimaryBannerComponent,
    PrimaryGridComponent,
    SndLayoutComponent,
    SndBannerComponent,
    SndGridComponent,
    SndeLayoutComponent,
    SndeBannerComponent,
    SndeGridComponent,
    ScmLayoutComponent,
    ScmBannerComponent,
    ScmGridComponent,
    WmsLayoutComponent,
    WmsBannerComponent,
    WmsGridComponent,
    CustomersLayoutComponent,
    CustomersBannerComponent,
    CustomersGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountUpModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
