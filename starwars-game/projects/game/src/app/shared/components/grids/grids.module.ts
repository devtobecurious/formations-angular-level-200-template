import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridInjectionComponent } from './grid-injection/grid-injection.component';
import { CellGridInjectionComponent } from './cell-grid-injection/cell-grid-injection.component';



@NgModule({
  declarations: [
    GridInjectionComponent,
    CellGridInjectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridInjectionComponent
  ]
})
export class GridsModule { }
