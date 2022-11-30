import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridParentComponent } from './grid-parent/grid-parent.component';
import { RowEnfantComponent } from './row-enfant/row-enfant.component';



@NgModule({
  declarations: [
    GridParentComponent,
    RowEnfantComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridParentComponent
  ],
  providers: []
})
export class GridContainerModule { }
