import { Component, inject, OnInit } from '@angular/core';
import { concatMap, debounceTime, filter, Observable, pipe, switchMap } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchStore } from 'search';
import { LogsService } from 'logs';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  private readonly logger = inject(LogsService)
  games: GameDto[] = [];
  private readonly searchStore = inject(SearchStore)
  searchItem = '';

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    console.info('ngnininit')

    // this.searchStore.asObservable.subscribe(item => {
    //   this.logger.log('item', item)
    //   this.gameService.getAll(3).subscribe(items => this.games = items);

    // })

    this.searchStore.asObservable.
    pipe
    (
      debounceTime(350),
      filter(search => search.value !== ''),
      switchMap(search => this.gameService.getAll(search.value, 10))
    )
    .subscribe(items => {
      this.games = items
    })

  }

}
