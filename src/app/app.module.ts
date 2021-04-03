import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { NavMenuModule } from './nav-menu/nav-menu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    NavMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
