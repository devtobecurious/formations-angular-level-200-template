import { Component, inject, NgModule, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchBarStore, SearchItemState } from 'search-bar';
import { CommonModule } from '@angular/common';
import { GameTableComponent } from '../game-table/game-table.component';

@Component({
    selector: 'game-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css'],
    standalone: false
})
export class GameListComponent {// implements OnInit {
  private readonly searchStore = inject(SearchBarStore);
  private readonly gameService = inject(GameService);
  protected readonly games$ = this.gameService.getAll(10);
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
    GameTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [GameListComponent]
})
export class GameListModule {}
