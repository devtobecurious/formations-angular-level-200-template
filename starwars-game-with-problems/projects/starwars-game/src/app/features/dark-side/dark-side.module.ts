import { DarkSideRoutingModule } from './dark-side-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkSideOneComponent } from './dark-side-one/dark-side-one.component';
import { DarkSideChildOneComponent } from './dark-side-child-one/dark-side-child-one.component';
import { DarkSideChildChildOneComponent } from './dark-side-child-child-one/dark-side-child-child-one.component';
import { DarkSideChildTwoComponent } from './dark-side-child-two/dark-side-child-two.component';



@NgModule({
  declarations: [
    DarkSideOneComponent,
    DarkSideChildOneComponent,
    DarkSideChildChildOneComponent,
    DarkSideChildTwoComponent
  ],
  imports: [
    CommonModule,
    DarkSideRoutingModule
  ]
})
export class DarkSideModule { }
