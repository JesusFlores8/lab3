import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutloginComponent } from './layouts/layoutlogin/layoutlogin.component';
import { LayoutwebsiteComponent } from './layouts/layoutwebsite/layoutwebsite.component';
import { LayoutpanelComponent } from './layouts/layoutpanel/layoutpanel.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LayoutloginComponent,
    LayoutwebsiteComponent,
    LayoutpanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
