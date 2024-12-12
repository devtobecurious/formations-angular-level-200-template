import { Component, inject, OnInit } from '@angular/core';
import { Observable, shareReplay, switchMap } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchStore } from 'search';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
    selector: 'game-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css'],
    standalone: false
})
export class GameListComponent implements OnInit {
  private readonly searchStore = inject(SearchStore)

  private readonly games$ = this.searchStore.asObservable.pipe(
    switchMap(search => this.gameService.getAll(search.item || '', 3)),
    // shareReplay(1)
  ) // LAZY

  games$$ = toSignal(this.games$)

  games: GameDto[] = [];
  searchItem = '';

  constructor(private readonly gameService: GameService) { }

  ngOnInit(): void {
    // this.searchStore.asObservable.subscribe({
    //   next: search => {
    //     this.gameService.getAll(search.item || '', 3).subscribe({
    //       next: items => this.games = items
    //     });
    //   }
    // })

    // à mettre dans un service
    // this.searchStore.asObservable.pipe(
    //   switchMap(search => this.gameService.getAll(search.item || '', 3))
    // ).subscribe({
    //    next: items => this.games = items
    // })


  }

}
