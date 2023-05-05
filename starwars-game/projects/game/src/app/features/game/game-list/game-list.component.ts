import { selectAllGamesSuccess } from './../store/selectors/index';
import { Component, inject, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, switchMap } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { factorySearchService } from '../../../shared/ui/search/services';
import { GameBusiness } from '../services/game.business';
import { GameService } from '../services/game.service';
import { requestToLoadAllGamesAction } from '../store/actions';
import { selectAllGames } from '../store/selectors';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  // games: GameDto[] = [];
  searchItem = '';
  //private readonly searchService = factorySearchService();

  // games$ = this.searchService.asObservable.pipe(
  //   switchMap(item => this.gameService.getAll(item.value, 3))
  // );

  // games$ = inject(GameBusiness).searchAll();
  private readonly store = inject(Store);
  games$ = this.store.pipe(select(selectAllGamesSuccess));

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.store.dispatch(requestToLoadAllGamesAction());
    // this.searchService.asObservable.subscribe(item => {
    //   this.gameService.getAll(3).subscribe(items => this.games = items);
    // });
    // this.searchService.asObservable.pipe(
    //   switchMap(item => this.gameService.getAll(item.value, 3))
    // ).subscribe(items => this.games = items);
  }

}
