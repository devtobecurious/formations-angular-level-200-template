import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchStore } from 'my-search';

@Component({
    selector: 'game-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css'],
    standalone: false
})
export class GameListComponent implements OnInit {
  private readonly searchStore = inject(SearchStore)
  games: GameDto[] = []; // statefull
  searchItem = '';

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.searchStore.asObservable.subscribe((search) => {
      console.info(search)
    });

    this.gameService.getAll(3).subscribe(items => this.games = items);
  }

}
