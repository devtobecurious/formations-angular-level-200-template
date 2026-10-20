import { computed, inject, Injectable, Signal } from '@angular/core';
import { SearchStore } from 'design-system';
import { GameService } from './game.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { GameDto } from '../../../core/models/game.dto';

@Injectable({
  providedIn: 'root'
})
export class GameBusinessService {
  private readonly gameService = inject(GameService);
  private readonly searchStore = inject(SearchStore);
  protected readonly searchState = this.searchStore.asReadonly;
  private readonly games$ = this.gameService.getAll(300);
  private readonly gamesAsSignal = toSignal(this.games$);

  private readonly gameItems = computed(() => {
    const searchValue = this.searchState();
    console.info('value', searchValue)
    const items = this.gamesAsSignal();

    if (items) {
      return items.filter(item => item.title.startsWith(searchValue))
    }

    return [];
  });

  getAll(): Signal<GameDto[]> {
    return this.gameItems;
  }
}
