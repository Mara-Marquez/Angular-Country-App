import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ByCapitalPage } from './country/pages/by-capital-page/by-capital-page';

@NgModule({
  declarations: [
    AppComponent,
    ByCapitalPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
 providers: [
  { provide: LocationStrategy, useClass: HashLocationStrategy }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
