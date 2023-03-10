import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchService } from '../../../shared/components/search/services';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: GameDto[] = [];
  searchItem = '';

  constructor(private gameService: GameService,
              private readonly searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.asObservable.subscribe(item => {
      this.gameService.getAll(item.value, 3).subscribe(items => this.games = items);
    });

  }

}
