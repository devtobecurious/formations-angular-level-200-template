import { Component, ElementRef, inject, NgZone, OnInit, signal, viewChild } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import { GridComponent } from '../../../shared/components/grid/grid.component';
import { concatMap, fromEvent, interval, mergeMap, Observable, switchMap, take, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'game-new-one',
    templateUrl: './new-one.component.html',
    styleUrls: ['./new-one.component.css'],
    standalone: true,
    imports: [GridComponent, AsyncPipe]
})
export class NewOneComponent implements OnInit {
  private readonly zone = inject(NgZone)
  btnStart = viewChild<ElementRef<HTMLButtonElement>>('btnStart')
  timer$: Observable<number> | undefined
  private readonly child$ = interval(1000).pipe(take(10))
  tiles: Tile[] = [];

  mySignal = signal<number>(0)

  constructor(private tileService: TileService) { }


computeLet(): number {
  this.mySignal.update(nb => nb + 1)
  //this.mySignal.set(this.mySignal() + 1)
  console.info('computeLet')

  return this.mySignal();
}

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      this.timer$ = fromEvent(this.btnStart()!.nativeElement, 'click').pipe(
        tap(evt => console.info(evt)),
        tap(() => this.mySignal.update(nb => nb + 1)),
        // mergeMap(() => this.child$) // quel est le comportement d'un merge map
        // concatMap(() => this.child$)
        switchMap(() => this.child$)
      )
   });

    this.tileService.loadAll()
    .subscribe(tiles => this.tiles = tiles);

    console.info('**************************************')
  }

}
