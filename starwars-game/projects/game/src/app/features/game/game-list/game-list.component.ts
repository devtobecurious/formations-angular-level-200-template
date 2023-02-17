import { Component, OnInit, inject } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchService } from '../../../shared/components/search/services/search.service';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from '../../../reducers';
import { selectAllGames, selectAllSuccessGames } from '../store/selectors';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  private readonly searchService = inject(SearchService);
  games: GameDto[] = [];
  searchItem = '';

  constructor(private gameService: GameService,
              private readonly store: Store<ApplicationState>) { }

  logView(): void {
    console.info('GameListComponent');
  }

  capitalizeFirstChar(value: string): string {
    // soit je memoize le résultat
    // soit je vais lui préférer une Pipe
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  get computed(): number {
    console.info('GameListComponent, computed');
    return 2 * 2; // pas de calcul lourd ! => ici chercher à memoizer !
  }

  ngOnInit(): void {
    // this.searchService.stateReadonly.subscribe(searchItem => {
    //   this.gameService.getAll(3).subscribe(items => this.games = items);
    // });

    // va etre déporter dans l'effect
    // this.searchService.stateReadonly.pipe(
    //   switchMap(item => this.gameService.getAll(3))
    // ).subscribe(items => this.games = items);

    // à mettre dans mon business service !
    this.store
    .pipe(
      select(selectAllGames)
      //select(selectAllSuccessGames)
    )
    .subscribe(items => this.games = items);
  }

}
