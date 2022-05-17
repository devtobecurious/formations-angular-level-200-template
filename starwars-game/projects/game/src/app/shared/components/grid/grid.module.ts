import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { CellComponent } from './cell/cell.component';
import { LoggerService } from '../../services/logger.service';



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
    { provide: LoggerService, useClass: LoggerService }
  ]
})
export class GridModule { }
