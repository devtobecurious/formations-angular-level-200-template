import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import { changeStateCell, TileCell } from '../models';

@Component({
    selector: 'game-cell',
    templateUrl: './cell.component.html',
    styleUrls: ['./cell.component.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent implements OnInit {

  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  private readonly zone = inject(NgZone);

  @Input() item !: TileCell;

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      
    });

    //this.changeDetectorRef.detach();

    // Simulate a long-running operation
    

    //this.changeDetectorRef.reattach();
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

    this.changeDetectorRef.detectChanges();
  }

}
