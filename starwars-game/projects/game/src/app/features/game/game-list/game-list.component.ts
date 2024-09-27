import { Component, inject, OnInit } from '@angular/core';
import { concatMap, map, mergeMap, Observable, switchMap } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchService } from 'search';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: GameDto[] = [];
  searchItem = '';
  private readonly searchService = inject(SearchService);

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    const parent$ = this.searchService.asObservable;

    parent$.pipe(
      // concatMap(item => this.gameService.getAll(item.value, 3))
      // mergeMap(item => this.gameService.getAll(item.value, 3))
      switchMap(item => this.gameService.getAll(item.value, 3))
    ).subscribe({
      next: items => {
        this.games = items
      }
    })

//    this.gameService.getAll(3).subscribe(items => this.games = items);
  }

}
