import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchBusService } from 'search';
import { GameApplication } from '../services/game.application';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  // games: GameDto[] = [];
  searchItem = '';
  //private readonly store = inject(SearchBusService);
  private readonly application = inject(GameApplication);
  games$ = this.application.getAll();

  //constructor(private gameService: GameService) { }

  ngOnInit(): void {
    // this.store.asObservable.subscribe(result => {
    //   console.info('ma recherche', result);
    // });
    // this.gameService.getAll(3).subscribe(items => this.games = items);
  }

}
