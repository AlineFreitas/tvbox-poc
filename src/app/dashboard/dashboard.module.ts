import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports:      [ CommonModule ],
  providers:    [],
  declarations: [ DashboardComponent ],
  exports:      [ DashboardComponent ],
  bootstrap:    [ DashboardComponent ]
})
export class DashboardModule { }
