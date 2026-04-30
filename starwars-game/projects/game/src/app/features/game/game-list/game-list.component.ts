import { Component, computed, inject, NgModule, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchBarStore, SearchItemState } from 'search-bar';
import { CommonModule } from '@angular/common';
import { GameTableComponent } from '../game-table/game-table.component';
import { GameRowComponent } from '../game-row/game-row.component';
import { BoolToColorDirective } from '../../../shared/directives/bool-to-color.directive';
import { BoolToTextPipe } from '../../../shared/pipes/bool-to-text.pipe';

@Component({
    selector: 'game-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css'],
    standalone: false
})
export class GameListComponent {// implements OnInit {
  private readonly searchStore = inject(SearchBarStore);
  private readonly gameService = inject(GameService);
  private readonly gamesAsSignal = this.gameService.getAllSignal();

  protected readonly gamesFilteredAsSignal = computed(() => {
    const searchItem = this.searchStore.item();
    const games = this.gamesAsSignal();

    return games?.filter(g => g.title.startsWith(searchItem.value));
  });

  protected readonly searchItem$: Observable<SearchItemState> = this.searchStore.asObservable;

  //games: GameDto[] = [];
  searchItem = '';

  //constructor(private gameService: GameService) { }

  // ngOnInit(): void {
  //   this.gameService.getAll(3).subscribe(items => this.games = items);
  // }

}

@NgModule({
  declarations: [
    GameListComponent,
    GameTableComponent,
    GameRowComponent,
    BoolToTextPipe,
    BoolToColorDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [GameListComponent]
})
export class GameListModule {}
