import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { changeStateCell, Tile, TileCell } from './models';
import { CellComponent } from './cell/cell.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'game-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [NgFor, CellComponent]
})
export class GridComponent implements OnInit, AfterViewInit, AfterContentInit {
  private readonly cd = inject(ChangeDetectorRef);

  @Input() set tiles(values: Tile[]) {
    this.cd.detach();

    this.cells = values.map(tile => {
      const cell = { ... tile, css: '' };

      changeStateCell(cell, tile.isRevealed);

      return cell;
    });

    this.cd.reattach();
  };
  cells: TileCell[] = [];



  ngAfterContentInit(): void {

  }

  ngAfterViewInit(): void {

  }


  ngOnInit(): void {

  }

  logView() {
    setTimeout(() => {

    }, 10);
  }

  onClick() {
  }

  trackByFn(index: number, item: TileCell) {
    return item.id;
  }

}
