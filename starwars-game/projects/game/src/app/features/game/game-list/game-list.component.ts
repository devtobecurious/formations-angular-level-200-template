import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchService } from '../../../shared/components/search/services';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from '../../../reducers';
import { addNewGameAction } from '../store/actions';
import { selectAllGamesSelector } from '../store/selectors';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: GameDto[] = [];
  searchItem = '';

  constructor(private gameService: GameService,
              private readonly searchService: SearchService,
              private readonly store: Store<ApplicationState>) { }

  ngOnInit(): void {
    // this.searchService.asObservable.pipe(
    //   switchMap(item => this.gameService.getAll(item.value, 3))
    // ).subscribe(items => this.games = items);

    this.store.pipe(
      select(selectAllGamesSelector)
    ).subscribe(items => this.games = items);
  }

  addGame(): void {
    const game = {
      id: 180,
      success: true,
      title: 'test depuis reducer'
    };

    this.store.dispatch(addNewGameAction({ game }));
  }
}
