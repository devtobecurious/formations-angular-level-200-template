import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { SearchService } from '../../../shared/components/ui/search/search.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  gameState: GameDto[] = [];
  games: GameDto[] = [];
  searchItem = '';

  constructor(private gameService: GameService,
              private searchService: SearchService) { }

  ngOnInit(): void {
    this.gameService.getAll(3).subscribe(items => {
      this.gameState = items;
      this.games = items;
    });

    // this.searchService.store.subscribe(item => {
    //   this.games = this.gameState.filter(game => game.title.toLowerCase().includes(item.value.toLowerCase()));
    // });

  }

}
