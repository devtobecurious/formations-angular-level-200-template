import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';
import { SixComponent } from './six/six.component';
import { SevenComponent } from './seven/seven.component';
import { LayoutPerfsComponent } from './layout-perfs/layout-perfs.component';



@NgModule({
  declarations: [
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    SixComponent,
    SevenComponent,
    LayoutPerfsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutPerfsComponent
  ]
})
export class PerfsModule { }
