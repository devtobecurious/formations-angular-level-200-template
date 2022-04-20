import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyGridComponent } from './my-grid/my-grid.component';
import { RowGridComponent } from './row-grid/row-grid.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyGridComponent,
    RowGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MyGridComponent
  ]
})
export class GridModule { }
