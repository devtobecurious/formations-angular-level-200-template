import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridContainerComponent } from './grid-container/grid-container.component';
import { GridCellComponent } from './grid-cell/grid-cell.component';



@NgModule({
  declarations: [
    GridContainerComponent,
    GridCellComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridContainerComponent
  ]
})
export class ContainerModule { }
