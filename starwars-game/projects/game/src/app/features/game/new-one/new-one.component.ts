import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import { concatMap, fromEvent, interval, map, mergeMap, switchMap, take } from 'rxjs';

@Component({
  selector: 'game-new-one',
  templateUrl: './new-one.component.html',
  styleUrls: ['./new-one.component.css']
})
export class NewOneComponent implements OnInit {
  tiles: Tile[] = [];
  @ViewChild('startTimer', { static: true })
  startButton !: ElementRef<HTMLButtonElement>;

  constructor(private tileService: TileService) { }

  ngOnInit(): void {
    // this.tileService.loadAll()
    // .subscribe(tiles => this.tiles = tiles);

    const parent$ = fromEvent(this.startButton.nativeElement, 'click');
    const enfant$ = interval(1000)//.pipe(take(5));

    // parent$.pipe(
    //   map(() => enfant$)
    // ).subscribe({
    //   next: value => value.subscribe({
    //     next: value => console.info(value)
    //   })
    // });

    parent$.pipe(
      //mergeMap(() => enfant$)
      //concatMap(() => enfant$)
      switchMap(() => enfant$)
    ).subscribe({
      // next: value => value.subscribe({
      next: value => console.info(value)
      //})
    });

    // parent$.subscribe({
    //   next: () => enfant$.subscribe({
    //     next: value => console.info(value)
    //   })
    // });
  }

}
