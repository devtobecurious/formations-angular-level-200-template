import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllGameService } from '../../services/game.service';
import { SearchStore, ValueOrUndefined } from 'search';
import { GameApplication } from '../../services/game.application';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  private readonly gameApplication = inject(GameApplication);
  games$ = this.gameApplication.getAll();

  searchStore = inject(SearchStore);

  // games: GameDto[] = [];
  // searchItem: ValueOrUndefined<string> = '';

  //constructor(private gameService: GameService) { }

  ngOnInit(): void {

    //this.searchStore.asObservable.subscribe(item => this.searchItem = item.value);

    //this.gameService.getAll(this.searchItem, 3).subscribe(items => this.games = items);
  }

}
