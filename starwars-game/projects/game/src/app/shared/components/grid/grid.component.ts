import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import { changeStateCell, Tile, TileCell } from './models';

@Component({
  selector: 'game-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent implements OnInit, AfterViewInit, AfterContentInit {
  private readonly changeRef = inject(ChangeDetectorRef);
  private readonly ngZone = inject(NgZone);

  @Input() set tiles(values: Tile[]) {
    this.cells = values.map(tile => {
      const cell = { ...tile, css: '' };

      changeStateCell(cell, tile.isRevealed);

      this.changeRef.detectChanges();

      return cell;
    });
  };
  cells: TileCell[] = [];



  ngAfterContentInit(): void {

  }

  ngAfterViewInit(): void {

  }


  ngOnInit(): void {
    //  this.changeRef.();
    this.ngZone.runOutsideAngular(() => {

    });
  }

  logView() {
  }

  onClick() {
  }

  trackByFn(index: number, item: TileCell) {
    return item.id;
  }

}
