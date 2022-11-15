import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { SearchService } from '../../../shared/search/search.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  gamesPlus: GameDto[] = [];
  searchItem = '';
  games$ !: Observable<GameDto[]>;

  constructor(private gameService: GameService,
              private search: SearchService) { }

  ngOnInit(): void {
    this.search.state.subscribe(item => {
      console.info(item.value);
      this.gameService.getAll(3).subscribe(items => this.gamesPlus = items); // OOps memory leak !
    });





    this.games$ = this.gameService.getAll(3);
  }

  maFonction(): void {
    console.info('GameListComponent');
  }

  get uneFonctionCommeProp(): string {
    return '';
  }
}
