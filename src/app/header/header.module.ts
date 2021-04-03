import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './header.component';
import { AboutComponent } from '../components/about/about.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  declarations: [
    HeaderComponent,
    AboutComponent
  ],
  exports: [
    HeaderComponent
  ],
  bootstrap: [
    HeaderComponent
  ]
})
export class HeaderModule { }
