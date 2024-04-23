import { Component, inject, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { GameTableComponent } from '../game-table/game-table.component';
import { FormsModule } from '@angular/forms';
import { SearchStoreService } from 'search';

@Component({
    selector: 'game-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css'],
    standalone: true,
    imports: [FormsModule, GameTableComponent]
})
export class GameListComponent implements OnInit {
  private readonly searchStore = inject(SearchStoreService);
  games: GameDto[] = [];
  searchItem = '';

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    // this.searchStore.asObservable().subscribe(item => {
    //   console.info(item.value); // a priori ...
    //   this.gameService.getAll(item.value, 3).subscribe(items => this.games = items);
    // });

    this.searchStore.asObservable()
    .pipe(
      switchMap(item => this.gameService.getAll(item.value, 3))
    )
    .subscribe(items => this.games = items);
  }

}
