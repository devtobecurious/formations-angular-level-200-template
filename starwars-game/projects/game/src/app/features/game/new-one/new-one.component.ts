import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import { GridComponent } from '../../../shared/components/grid/grid.component';
import { fromEvent, Observable } from 'rxjs';

@Component({
    selector: 'game-new-one',
    templateUrl: './new-one.component.html',
    styleUrls: ['./new-one.component.css'],
    standalone: true,
    imports: [GridComponent]
})
export class NewOneComponent implements OnInit {
  @ViewChild('btnStart', {static: true}) btnStart: ElementRef<HTMLButtonElement> | undefined;
  click$ : Observable<unknown> | undefined;
  tiles: Tile[] = [];

  constructor(private tileService: TileService) { }

  ngOnInit(): void {
    if (this.btnStart) {
      this.click$ = fromEvent(this.btnStart.nativeElement, 'click');
    }

    this.tileService.loadAll()
                    .subscribe(tiles => this.tiles = tiles);
  }

}
