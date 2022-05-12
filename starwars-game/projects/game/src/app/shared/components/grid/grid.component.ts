import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { changeStateCell, Tile, TileCell } from './models';

@Component({
  selector: 'game-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent implements OnInit {

  @Input() set tiles(values: Tile[]) {
    this.cells = values.map(tile => {
      const cell = { ... tile, css: '' };

      changeStateCell(cell, tile.isRevealed);

      return cell;
    });
  };
  cells: TileCell[] = [];


  ngOnInit(): void {
  }

  logView() {
    console.info('GridComponent');
  }

  onClick() {
  }

  trackByFn(index: number, item: TileCell) {
    return item.id;
  }

}
