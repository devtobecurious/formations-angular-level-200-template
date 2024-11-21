import { Component, ElementRef, inject, OnInit, viewChild } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../../reducers';
import { GameDto } from '../../../core/models/game.dto';
import { addGameToStoreAction, endGameAction } from '../store/games.actions';
import { concatMap, finalize, fromEvent, interval, map, mergeMap, Observable, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'game-new-one',
  templateUrl: './new-one.component.html',
  styleUrls: ['./new-one.component.css']
})
export class NewOneComponent implements OnInit {
  private readonly store = inject(Store<ApplicationState>)
  tiles: Tile[] = [];
  btnStart = viewChild<ElementRef<HTMLButtonElement>>('btnStart')

  counter$: Observable<number> | undefined
  currentGame: GameDto | undefined

  constructor(private tileService: TileService) { }

  oops(): void {
    console.info('oopps')
    // setTimeout(() => {})
  }

  ngOnInit(): void {
    const btn = this.btnStart()?.nativeElement
    const enfants$ = interval(1000).pipe(
                          take(10), // au bout de 10 next, ça complete
                          finalize(() => {
                            if(this.currentGame) {
                              this.store.dispatch(endGameAction({ id: this.currentGame.id }))
                            }
                          })
                        )

    if(btn) {
      const obs$ = fromEvent(btn, 'click')
      // obs$.subscribe({
      //   next: item => {
      //     enfants$.subscribe({
      //       next: item => console.info(item)
      //     })
      //   }
      // })

      // obs$
      // .pipe(
      //   map(item => enfants$)
      // )
      // .subscribe({
      //   next: item => {
      //     item.subscribe({
      //       next: child => console.info(child)
      //     })
      //   }
      // })

      this.counter$ = obs$
                      .pipe(
                        tap(item => this.start()),
                        // mergeMap(item => enfants$) // => subscription à chaque click parent
                        // concatMap(item => enfants$) // => subscription après chaque complete enfant
                        switchMap(item => enfants$), // => kill l'ancienne subscription pour nouvelle subscription
                      )
    }
  }

  start(): void {
    //#region NGRX
    this.currentGame = {
      id: Math.random() * 100,
      success: false,
      title: 'Youpi une nouvelle partie'
    }

    this.store.dispatch(addGameToStoreAction({ item: this.currentGame }))

    this.tileService.loadAll()
    .subscribe(tiles => this.tiles = tiles);

    // setTimeout(() => {
    //   this.store.dispatch(endGameAction({ id: game.id }))
    // }, 1000);
    //#endregion
  }

}
