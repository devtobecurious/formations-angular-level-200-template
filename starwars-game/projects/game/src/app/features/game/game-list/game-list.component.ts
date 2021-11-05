import { concatMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { SearchService } from '../../../shared/services/search.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: GameDto[] = [];
  searchItem = '';

  constructor(private gameService: GameService,
              private searchService: SearchService) { }

  ngOnInit(): void {
    // this.searchService.state.subscribe(item => console.info(item));
    // this.gameService.getAll(3).subscribe(items => this.games = items);

    this.searchService.state.pipe(
      concatMap(searchItem => this.gameService.getAll(searchItem, 3))
    ).subscribe(items => this.games = items);
  }

}
