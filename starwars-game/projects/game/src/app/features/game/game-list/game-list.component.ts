import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GameTableComponent } from '../game-table/game-table.component';
import { GameApplication } from '../services/game.application';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
    selector: 'game-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css'],
    standalone: true,
    imports: [FormsModule, GameTableComponent, AsyncPipe]
})
export class GameListComponent implements OnInit {
  private readonly business = inject(GameApplication);
  games$ = this.business.getAll(); // ça n'exécute rien !! LAZY
  //games: GameDto[] = [];
  games$$ = toSignal(this.games$, { initialValue: [] })
  searchItem = '';

  //constructor(private gameService: GameService) { }

  ngOnInit(): void {
    // this.searchStore.asObservable.subscribe({
    //   next: search => {
    //     console.info(search.value);
    //     this.gameService.getAll(search.value ?? '', 3).subscribe({
    //       next: items => this.games = items
    //     });
    //   }
    // });


    // .subscribe({
    //   next : items => this.games = items
    // })
  }

}
