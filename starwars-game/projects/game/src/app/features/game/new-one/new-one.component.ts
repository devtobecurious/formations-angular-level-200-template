import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import { GridComponent } from '../../../shared/components/grid/grid.component';
import { concatMap, fromEvent, interval, map, mergeMap, Observable, switchMap, take } from 'rxjs';

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
  interval$ = interval(1000);
  tiles: Tile[] = [];

  constructor(private tileService: TileService) { }

  ngOnInit(): void {
    if (this.btnStart) {

      this.click$ = fromEvent(this.btnStart.nativeElement, 'click');
      // this.click$.subscribe({
      //   next: item => {
      //     this.interval$.subscribe(tick => console.info(tick));
      //   }
      // })

      // this.click$
      // .pipe(
      //   map(evt => this.interval$)
      // )
      // .subscribe({
      //   next: item => {
      //     item.subscribe(tick => console.info(tick))
      //   }
      // })

      // this.click$
      // .pipe(
      //   concatMap(evt => this.interval$.pipe(take(10)) ) // Concat map attend le complete du dernier abonné enfant
      // )
      // .subscribe({
      //   next: item => console.info(item)
      // })

      this.click$
      .pipe(
        switchMap(evt => this.interval$) // au nouveau next parent, il unsubscribe le dernier enfant
      )
      .subscribe({
        next: item => console.info(item)
      })
    }

    this.tileService.loadAll()
                    .subscribe(tiles => this.tiles = tiles);
  }

}
