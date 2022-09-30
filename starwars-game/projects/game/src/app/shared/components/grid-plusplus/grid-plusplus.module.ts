import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InGridComponent } from './in-grid/in-grid.component';
import { InCellComponent } from './in-cell/in-cell.component';



@NgModule({
  declarations: [
    InGridComponent,
    InCellComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InGridComponent
  ]
})
export class GridPlusplusModule { }
