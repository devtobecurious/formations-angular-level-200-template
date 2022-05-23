import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { CellComponent } from './cell/cell.component';



@NgModule({
  declarations: [
    GridComponent,
    CellComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridComponent
  ],
  providers: [
  ]
})
export class GridModule { }
