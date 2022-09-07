import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';
import { SixComponent } from './six/six.component';
import { SevenComponent } from './seven/seven.component';
import { TickNumberComponent } from './tick-number/tick-number.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { TopDownRoutingModule } from './top-down-routing.module';



@NgModule({
  declarations: [
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    SixComponent,
    SevenComponent,
    TickNumberComponent,
    ChangeDetectionComponent
  ],
  imports: [
    CommonModule,
    TopDownRoutingModule
  ],
  exports: [
    ChangeDetectionComponent
  ]
})
export class TopdownModule { }
