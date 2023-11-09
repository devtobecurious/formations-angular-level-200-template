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
  @ViewChild("startBtn", {static: true}) button !: ElementRef<HTMLButtonElement>;

  constructor(private tileService: TileService) { }

  maFonction(): void {
    console.info('Ma fonction');
  }

  ngOnInit(): void {
    this.tileService.loadAll()
    .subscribe(tiles => this.tiles = tiles);

    const parent$ = fromEvent(this.button.nativeElement, 'click');
    // timer$.subscribe(item => {
    //   interval().subscribe(item => console.info(item));
    // });

    const enfant$ = interval(1000).pipe(take(10));

    // const monObs$ = parent$.pipe(
    //   mergeMap(item => enfant$) // autant de subscribe enfant que de next parent
    // );
    // const monObs$ = parent$.pipe(
    //   concatMap(item => enfant$) // On attend le complete de l'enfant pour permettre de subscribe au prochain next parent
    // );
    const monObs$ = parent$.pipe(
      switchMap(item => enfant$) // On n'attend pas le complete de l'enfant pour se re subscribe lors du prochain next parent
    );

    monObs$.subscribe({
      next: item => {
        console.info(item);
      }
    });

  }

}
