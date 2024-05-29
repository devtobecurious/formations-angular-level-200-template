import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { GameTableComponent } from '../game-table/game-table.component';
import { FormsModule } from '@angular/forms';
import { SearchStateService } from 'search';
import { GameApplication } from '../services/game.application';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'game-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css'],
    standalone: true,
    imports: [FormsModule, GameTableComponent, AsyncPipe],
    // providers: [SearchStateService] // Scoped: Scoped / Transient
})
export class GameListComponent { //implements OnInit => on en a plus besoin
  private readonly application = inject(GameApplication);
  games$ = this.application.getAll();
  // On en n'a plus besoin :
  // private readonly searchStore = inject(SearchStateService);
  // games: GameDto[] = [];
  searchItem = '';

  // On se passe du constructor
  // constructor(private gameService: GameService) { }

  // On se passe maintenant du ngOnInit
  // ngOnInit(): void {
  //   // this.searchStore.asObservable.subscribe({ // 1 seul subscribe !!! or ici on en a deux
  //   //   next: item => {
  //   //     this.gameService.getAll('', 3).subscribe({
  //   //       next: items => this.games = items
  //   //     });
  //   //   }
  //   // });


  // }

}
