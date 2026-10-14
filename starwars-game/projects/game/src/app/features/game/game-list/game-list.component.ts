import { Component, computed, effect, inject, OnInit, untracked } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchBarService } from 'search-bar';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'game-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css'],
    standalone: false
})
export class GameListComponent implements OnInit {
  private readonly gameService = inject(GameService);
  private readonly searchService = inject(SearchBarService);

  private readonly itemsFromApi = toSignal(this.gameService.getAll(1000));

  private readonly testSearch = effect(() => {
    const value = this.searchService.stateAsReadonly();
    console.info('value', value);
  })

  protected readonly displayItems = computed(() => {
    const searchValue = this.searchService.stateAsReadonly();
    let items = untracked(this.itemsFromApi);

    if(searchValue && items) {
      let aa = 1
      items = items.filter(item => item.title.startsWith(searchValue));
    }

    return items;
  });

  //games: GameDto[] = [];
  searchItem = '';

  // constructor(private gameService: GameService) { }

  ngOnInit(): void {
    //this.gameService.getAll(3).subscribe(items => this.games = items);
  }

}
