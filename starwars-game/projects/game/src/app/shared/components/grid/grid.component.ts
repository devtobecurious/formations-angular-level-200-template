import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { changeStateCell, Tile, TileCell } from './models';
import { NgFor } from '@angular/common';
import { CellComponent } from './cell/cell.component';

@Component({
    selector: 'game-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [NgFor, CellComponent]
})
export class GridComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input() set tiles(values: Tile[]) {
    this.cells = values.map(tile => {
      const cell = { ... tile, css: '' };

      changeStateCell(cell, tile.isRevealed);

      return cell;
    });
  };
  cells: TileCell[] = [];



  ngAfterContentInit(): void {

  }

  ngAfterViewInit(): void {

  }


  ngOnInit(): void {

  }

  logView() {
  }

  onClick() {
  }

  trackByFn(index: number, item: TileCell) {
    return item.id;
  }

}
