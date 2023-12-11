import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GameService } from '../../services/game.service';
import { SearchStore, ValueOrUndefined } from 'search';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  // games: GameDto[] = [];
  // searchItem: ValueOrUndefined<string> = '';

  //constructor(private gameService: GameService) { }

  ngOnInit(): void {
    //this.searchStore.asObservable.subscribe(item => this.searchItem = item.value);

    //this.gameService.getAll(this.searchItem, 3).subscribe(items => this.games = items);
  }

}
