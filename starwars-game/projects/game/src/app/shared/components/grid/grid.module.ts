import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { CellComponent } from './cell/cell.component';



@NgModule({
    imports: [
        CommonModule,
        GridComponent,
        CellComponent
    ],
    exports: [
        GridComponent
    ],
    providers: []
})
export class GridModule { }
