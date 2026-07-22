import { Component, inject, OnInit } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchBarStore } from 'search-bar';

@Component({
    selector: 'game-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css'],
    standalone: false
})
export class GameListComponent implements OnInit {
  games: GameDto[] = [];
  searchItem = '';

  private readonly searchBarStore = inject(SearchBarStore);

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
//    this.gameService.getAll(3).subscribe(items => this.games = items);

    // this.searchBarStore.asObservable$.subscribe({
    //   next: (searchValue) => {
    //     const value = searchValue?.value || '';

    //     this.gameService.getAll(3).subscribe(items => this.games = items);
    //   }
    // });
  this.gameService.getAll('', 3).pipe(
    map(items => items[0])
  ).subscribe({
    next: (item) => {
     
    }
  });


    this.searchBarStore.asObservable$.pipe(
      switchMap(searchValue => this.gameService.getAll(searchValue?.value || '', 3))
    ).subscribe({
      next: (items) => {
        this.games = items;
      }
    });
  }

}
