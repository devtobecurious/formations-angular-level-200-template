import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchService } from 'search';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  private readonly searchStore = inject(SearchService);
  games: GameDto[] = [];
  searchItem = '';

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    // this.searchStore.asObservable.subscribe(item => {
    //   console.info(item.value);
    // })

    this.searchStore.asObservable.subscribe({
      next: item => {
        console.info(item.value);
      }
    })

    this.gameService.getAll(3).subscribe(items => this.games = items);
  }

}
