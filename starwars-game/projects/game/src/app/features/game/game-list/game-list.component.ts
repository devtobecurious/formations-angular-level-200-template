import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchStoreService } from '../../../shared/libs/uis/search-bar/services/search-store.service';

@Component({
    selector: 'game-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css'],
    standalone: false
})
export class GameListComponent implements OnInit {
  games: GameDto[] = [];
  searchItem = '';
  private readonly searchStore = inject(SearchStoreService)

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getAll(3).subscribe(items => this.games = items);

    this.searchStore.asObservable.subscribe({
      next: (value) => console.log(value)
    })
  }

}
