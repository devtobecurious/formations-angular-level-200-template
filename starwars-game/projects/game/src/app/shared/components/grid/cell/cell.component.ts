import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { changeStateCell, TileCell } from '../models';
import { NgClass } from '@angular/common';

@Component({
    selector: 'game-cell',
    templateUrl: './cell.component.html',
    styleUrls: ['./cell.component.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [NgClass],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent implements OnInit, OnChanges {
  private readonly cdr = inject(ChangeDetectorRef);

  ngOnChanges(changes: SimpleChanges): void {
    console.info(changes);
  }

  @Input() item !: TileCell;

  ngOnInit(): void {
    // this.cdr.detach();
  }

  change(): void {
    // this.cdr.detectChanges();
    //this.cdr.reattach();
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
