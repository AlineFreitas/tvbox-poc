import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu.component';

@NgModule({
  imports:      [ CommonModule ],
  providers:    [],
  declarations: [ NavMenuComponent ],
  exports:      [ NavMenuComponent ],
  bootstrap:    [ NavMenuComponent ]
})
export class NavMenuModule { }
