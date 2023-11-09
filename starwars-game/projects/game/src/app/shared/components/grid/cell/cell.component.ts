import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation, inject } from '@angular/core';
import { changeStateCell, TileCell } from '../models';
import { ConfigStyleService } from '../services/config-style.service';

@Component({
  selector: 'game-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent implements OnInit, OnChanges {
  styleService = inject(ConfigStyleService);

  ngOnChanges(changes: SimpleChanges): void {
    console.info('changes', changes);
  }

  @Input() item !: TileCell;

  ngOnInit(): void {
    this.styleService.store.asObservable().subscribe(item => {});

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
