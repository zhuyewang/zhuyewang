import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppLogoComponent } from './app-logo/app-logo.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { SelectivePreferenceComponent } from './selective-preference/selective-preference.component';
import { AgriTourismeComponent } from './agri-tourisme/agri-tourisme.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppLogoComponent,
    HomeNavComponent,
    HomeBannerComponent,
    SelectivePreferenceComponent,
    AgriTourismeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
