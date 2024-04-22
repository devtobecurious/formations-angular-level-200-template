import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { changeStateCell, TileCell } from '../models';
import { NgClass } from '@angular/common';

@Component({
    selector: 'game-cell',
    templateUrl: './cell.component.html',
    styleUrls: ['./cell.component.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [NgClass]
})
export class CellComponent implements OnInit {

  @Input() item !: TileCell;

  ngOnInit(): void {


  }

  logView() {
    console.info('CellComponent');
  }

  clickTile(item: TileCell, cell: HTMLDivElement) {
    changeStateCell(item, ! item.isRevealed, true);
    this.appearValueOnCell(item, cell);
  }

  private appearValueOnCell(cell: TileCell, div: HTMLDivElement) {
    div.innerText = '';

    if (cell.isRevealed) {
      div.innerText = cell.value.toString();
    }
  }

}
