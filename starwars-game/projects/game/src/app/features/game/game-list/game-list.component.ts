import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { GameDto } from '../../../core/models/game.dto';
import { SearchService } from '../../../shared/components/ui/search/search.service';
import { PlayerService } from '../../players/services/player.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  gameState: GameDto[] = [];
  games: GameDto[] = [];
  searchItem = '';

  constructor(private gameService: GameService,
              private playerService: PlayerService,
              private searchService: SearchService) { }

  ngOnInit(): void {
    // this.gameService.getAll(3).subscribe(items => {
    //   this.gameState = items;
    //   this.games = items;

    //   this.games.forEach(game => {
    //     this.playerService.getAll(game).subscribe(players => {
    //       game.players = players;
    //     });
    //   });
    // });

    this.gameService.getAll(3)
    .pipe(
      mergeMap(items => this.playerService.getAll(items))
    )
    .subscribe(items => {

    });

    this.searchService.store.subscribe(item => {
      this.games = this.gameState.filter(game => game.title.toLowerCase().includes(item.value.toLowerCase()));
    });

  }

}
