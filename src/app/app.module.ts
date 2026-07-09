import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ByCapitalPage } from './country/pages/by-capital-page/by-capital-page';
import { HomePage } from './pages/home-page/home-page';
import { RouterModule } from '@angular/router';
import { Footer } from './shared/footer/footer';

@NgModule({
  declarations: [
    AppComponent,
   // ByCapitalPage,
    HomePage
    
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  RouterModule,
  Footer,
  ],
 providers: [
  { provide: LocationStrategy, useClass: HashLocationStrategy }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
