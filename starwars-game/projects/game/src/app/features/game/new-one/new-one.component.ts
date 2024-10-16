import { Component, ElementRef, inject, OnInit, viewChild } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import { concatMap, fromEvent, interval, map, mergeMap, Observable, switchMap, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../../reducers';
import { addNewGameAction } from '../store/games.actions';
import { GameDto } from '../../../core/models/game.dto';

@Component({
  selector: 'game-new-one',
  templateUrl: './new-one.component.html',
  styleUrls: ['./new-one.component.css']
})
export class NewOneComponent {
  btnStart = viewChild<ElementRef<HTMLButtonElement>>('btnStart')
  counter = 0
  parent$: Observable<unknown> | undefined
  enfant$ = interval(1000).pipe(take(61)) // lazy
  tiles: Tile[] = [];

  private readonly store = inject(Store<ApplicationState>)

  constructor(private tileService: TileService) { }

  startGame(): void {
    const newGame: GameDto = {
      id: 0,
      success: false,
      title: 'Super partie !'
    }
    this.store.dispatch(addNewGameAction({ game: newGame }))
  }

  ngOnInit(): void {
    //const btn = this.btnStart()
    // const btn = this.btnStart()

    // if(btn) {
    //   this.parent$ = fromEvent(btn.nativeElement, 'click')
    //   // ETAPE 01
    //   // this.parent$.subscribe({
    //   //   next: event => {
    //   //     this.enfant$.subscribe({
    //   //       next: item => this.counter = item
    //   //     })
    //   //   }
    //   // })
    //   // ETAPE 02
    //   // this.parent$.pipe(
    //   //   map(event => this.enfant$)
    //   // ).subscribe({
    //   //   next: item => {
    //   //     item.subscribe({
    //   //       next: result => this.counter = result
    //   //     })
    //   //   }
    //   // })
    //   // ETAPE 03
    //   // this.parent$.pipe(
    //   //   map(event => this.enfant$)
    //   // ).subscribe({
    //   //   next: item => {
    //   //     item.subscribe({
    //   //       next: result => this.counter = result
    //   //     })
    //   //   }
    //   // })
    //   // ETAPE 04
    //   this.parent$.pipe(
    //     // mergeMap(event => this.enfant$) // j'attends pas la fin de la dernière souscription enfant pour recréer une nouvelle souscription
    //     // concatMap(event => this.enfant$) // CUD sont à utiliser ici !
    //     switchMap(event => this.enfant$),
    //   ).subscribe({
    //     next: item => this.counter = item
    //   })
    // }

    this.tileService.loadAll()
    .subscribe(tiles => this.tiles = tiles);
  }

}
