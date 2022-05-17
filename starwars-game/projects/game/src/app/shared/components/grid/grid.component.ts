import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { changeStateCell, Tile, TileCell } from './models';

@Component({
  selector: 'game-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input() set tiles(values: Tile[]) {
    this.cells = values.map(tile => {
      const cell = { ... tile, css: '' };

      changeStateCell(cell, tile.isRevealed);

      return cell;
    });

    this.cdr.detectChanges();
  };
  cells: TileCell[] = [];

  constructor(private logger: LoggerService, private readonly cdr: ChangeDetectorRef) {}

  ngAfterContentInit(): void {

  }

  ngAfterViewInit(): void {

  }


  ngOnInit(): void {
    this.cdr.detach();
  }

  logView() {
    this.logger.log('GridComponent');
  }

  onClick() {
  }

  trackByFn(index: number, item: TileCell) {
    return item.id;
  }

}
