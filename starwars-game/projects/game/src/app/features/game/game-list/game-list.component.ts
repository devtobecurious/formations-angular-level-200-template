import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchStore } from 'search';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: GameDto[] = [];
  private readonly searchStore = inject(SearchStore)
  searchItem = '';

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.searchStore.asObservable.subscribe(item => {
      this.gameService.getAll(3).subscribe(items => this.games = items);
      console.info('item', item)
    })

  }

}
