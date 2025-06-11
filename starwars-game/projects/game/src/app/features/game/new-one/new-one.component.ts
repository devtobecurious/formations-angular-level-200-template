import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import { concatMap, fromEvent, interval, mergeMap, Observable, switchMap, take } from 'rxjs';

@Component({
  selector: 'game-new-one',
  templateUrl: './new-one.component.html',
  styleUrls: ['./new-one.component.css']
})
export class NewOneComponent implements OnInit {
  protected counter = 0
  tiles: Tile[] = [];
  @ViewChild('btnStart', {static: true}) btnStart !: ElementRef<HTMLButtonElement>;

  constructor(private tileService: TileService) { }


  ngOnInit(): void {
    const emitClickFromButton = fromEvent(this.btnStart.nativeElement, 'click')
    emitClickFromButton.pipe(
      switchMap(event => interval(1000).pipe(take(60)))
    )
    .subscribe({
      next: tick => this.counter = tick,
      complete: () => console.info('Fin ...')
    })

    this.tileService.loadAll()
    .subscribe(tiles => this.tiles = tiles);
  }

}
function conctaMap(arg0: (event: any) => Observable<number>): import("rxjs").OperatorFunction<Event, unknown> {
  throw new Error('Function not implemented.');
}

