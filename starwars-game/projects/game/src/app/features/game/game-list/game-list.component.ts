import { Component, inject, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchStoreService } from 'search';
import { Logger } from 'tools';

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
  private readonly logger = inject(Logger)

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    const obs = this.gameService.getAll(3)

    obs.subscribe(items => this.games = items);

    this.logger.log({message: 'Games fetched', level: 'info', timestamp: new Date()})

    this.searchStore.asObservable
    .pipe(
      filter(state => {
        let isOk = false

        if(state && state.item) {
          isOk = state.item.trim().length > 0
        }

        return isOk
      }),
      distinctUntilChanged((a, b) => a?.item === b?.item)
    )
    .subscribe({
      next: (state) => console.log(state?.item)
    })
  }

}
