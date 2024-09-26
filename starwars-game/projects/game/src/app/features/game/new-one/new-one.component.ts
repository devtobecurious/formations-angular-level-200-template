import { Component, ElementRef, OnInit, viewChild } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import { fromEvent, interval, switchMap } from 'rxjs';

@Component({
  selector: 'game-new-one',
  templateUrl: './new-one.component.html',
  styleUrls: ['./new-one.component.css']
})
export class NewOneComponent implements OnInit {
  tiles: Tile[] = [];
  timer = '';
  btnStart = viewChild<ElementRef<HTMLButtonElement>>('btnStart');

  constructor(private tileService: TileService) { }

  ngOnInit(): void {
    const obs$ = fromEvent(this.btnStart()?.nativeElement!, 'click');
    obs$.pipe(
      switchMap(tick => interval(1000))
    ).subscribe(item => this.timer = item.toString());

    this.tileService.loadAll()
    .subscribe(tiles => this.tiles = tiles);
  }

}
