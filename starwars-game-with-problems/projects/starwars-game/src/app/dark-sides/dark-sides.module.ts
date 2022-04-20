import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DarkSidesRoutingModule } from './dark-sides-routing.module';
import { DarkSideComponent } from './dark-side/dark-side.component';


@NgModule({
  declarations: [
    DarkSideComponent
  ],
  imports: [
    CommonModule,
    DarkSidesRoutingModule
  ]
})
export class DarkSidesModule { }
