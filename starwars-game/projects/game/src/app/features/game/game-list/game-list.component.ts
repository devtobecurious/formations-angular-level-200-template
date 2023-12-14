import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchStore, StringOrUndefined } from 'search';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  private readonly searchStore = inject(SearchStore);
  games: GameDto[] = [];
  searchItem: StringOrUndefined = '';

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.searchStore.asObservable.subscribe(state => this.searchItem = state.value);
    const monObs$ = this.gameService.getAll(this.searchItem, 3);

    monObs$.subscribe({ // 1° appel à l'api
      next: items => this.games = items
    });
  }

}
