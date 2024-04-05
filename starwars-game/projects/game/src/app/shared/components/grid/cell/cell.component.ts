import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { changeStateCell, TileCell } from '../models';

@Component({
  selector: 'game-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent implements OnInit {
  private readonly cdr = inject(ChangeDetectorRef);


  @Input() item !: TileCell;

  ngOnInit(): void {
    this.cdr.detach();
    // this.cdr.detectChanges(); // force la detection de changements pour son template et ses enfants

    // this.cdr.markForCheck(); // active un flag pour dire : rafraichit moi mais au prochain detect changes global

    this.cdr.reattach();
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
