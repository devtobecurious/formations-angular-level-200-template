import { Component, ElementRef, OnInit, viewChild } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import { concatMap, fromEvent, interval, mergeMap, Observable, switchMap, take } from 'rxjs';

@Component({
    selector: 'game-new-one',
    templateUrl: './new-one.component.html',
    styleUrls: ['./new-one.component.css'],
    standalone: false
})
export class NewOneComponent implements OnInit {
  tiles: Tile[] = [];
  timer$ !: Observable<number>
  startButton = viewChild<ElementRef<HTMLButtonElement>>('btnStart');

  constructor(private tileService: TileService) { }

  ngOnInit(): void {
    const element = this.startButton()?.nativeElement
    if(element) {
      this.timer$ = fromEvent(element, 'click')
      .pipe(
        mergeMap(item => interval(1000).pipe(take(10)))
      )
    }

    this.tileService.loadAll()
    .subscribe(tiles => this.tiles = tiles);
  }

}
