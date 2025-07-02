import { Component, inject, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, switchMap } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchStore } from 'search';
import {toObservable} from '@angular/core/rxjs-interop'
import { ApplicationState } from '../../../reducers';
import { select, Store } from '@ngrx/store';
import { selectAllGames, selectAllSuccessGames } from '../store/games.selectors';

@Component({
    selector: 'game-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css'],
    standalone: false
})
export class GameListComponent implements OnInit {
  games: GameDto[] = [];
  private readonly store = inject(Store<ApplicationState>)
  games$ = this.store.pipe(
    select(selectAllSuccessGames)
  )

  private readonly searchStore = inject(SearchStore)
  protected search$ = toObservable(this.searchStore.format)
  searchItem = '';

  constructor(private gameService: GameService) { }

  ngOnInit(): void {

    // this.search$.pipe(
    //   debounceTime(200),
    //   distinctUntilChanged(),
    //   switchMap(state => this.gameService.getAll(state!, 3))
    // ).subscribe(items => this.games = items)

  }

}
