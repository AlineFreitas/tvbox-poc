import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';

import { HeaderComponent } from './header.component';
import { AboutComponent } from '../components/about/about.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule
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
