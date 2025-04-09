import { Component, computed, effect, inject, OnInit } from '@angular/core';
import { filter, Observable, switchMap } from 'rxjs';
import { toSignal, toObservable } from '@angular/core/rxjs-interop'
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchStore } from 'my-search';
import { ApplicationState } from '../../../reducers';
import { select, Store } from '@ngrx/store';
import { selectAllGamesSelector } from '../store/games.selectors';

@Component({
    selector: 'game-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css'],
    standalone: false
})
export class GameListComponent implements OnInit {
  private readonly searchStore = inject(SearchStore)
  private query = this.searchStore.asValue
  private itemsSignal = toSignal(this.gameService.getAll(3)) // take(1)
  games = computed(() => this.itemsSignal()?.filter(item => item.title.startsWith(this.query() ?? '')))

  // 0. technique avec rxjs et toSignal et toObservable
  games$ = toObservable(this.query).pipe(
    switchMap(filter => this.gameService.getAll()),
    filter(items => items.length > 0)
  )

  // 1. technique signal
  gamesComputed = computed(() => {
    const queryResult = this.query()
    return this.gameService.getAll()
  })

  updateDomByQuery = effect(() => {
      const queryResult = this.query()
      document.getElementById('btn')!.textContent = queryResult!
  })

  // games: GameDto[] = []; // statefull
  searchItem = '';


  private readonly store = inject(Store<ApplicationState>)
  gamesNgrx$ = this.store.pipe(select(selectAllGamesSelector))

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    // this.searchStore.asObservable.subscribe((search) => {
    //   console.info(search)
    // });


   // this.gameService.getAll(3).subscribe(items => this.games = items);
  }

}
