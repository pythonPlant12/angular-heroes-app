import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainInfoModule } from './main-info/main-info.module';
import { NavBarModule } from './shared/nav-bar/nav-bar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    MainInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
