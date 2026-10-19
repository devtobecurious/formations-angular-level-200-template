import { Component, computed, effect, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchStore } from 'design-system';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'game-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css'],
    standalone: false
})
export class GameListComponent implements OnInit {
  private readonly searchStore = inject(SearchStore);
  protected readonly searchState = this.searchStore.asReadonly;
  private readonly games$ = this.gameService.getAll(300);
  private readonly gamesAsSignal = toSignal(this.games$);
  //games: GameDto[] = [];
  searchItem = '';

  protected readonly gameItems = computed(() => {
    const searchValue = this.searchState();
    console.info('value', searchValue)
    const items = this.gamesAsSignal();


    if(items) {
      return items.filter(item => item.title.startsWith(searchValue))
    }

    return [];
  });

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    //this.gameService.getAll(3).subscribe(items => this.games = items);
  }

}
