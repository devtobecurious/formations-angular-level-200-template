import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import { concatMap, fromEvent, interval, mergeMap, Observable, switchMap, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../../reducers';
import { addOneGame } from '../store/games.actions';

@Component({
    selector: 'game-new-one',
    templateUrl: './new-one.component.html',
    styleUrls: ['./new-one.component.css'],
    standalone: false
})
export class NewOneComponent implements OnInit {
  private readonly store = inject(Store<ApplicationState>)
  protected counter = 0
  tiles: Tile[] = [];
  @ViewChild('btnStart', {static: true}) btnStart !: ElementRef<HTMLButtonElement>;

  constructor(private tileService: TileService) { }

  startOne(): void {
    this.store.dispatch(addOneGame({ item: {id: 1, success: true, title: 'FF 16'} }))
  }


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

