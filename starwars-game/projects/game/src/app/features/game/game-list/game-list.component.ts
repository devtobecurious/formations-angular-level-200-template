import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GameDto } from '../../../core/models/game.dto';
import { SearchService } from '../../../shared/ui/search/search.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: GameDto[] = [];
  searchItem = '';

  constructor(private readonly gameService: GameService,
              private readonly search: SearchService) { }

  log(): void {
    // console.info('GameListComponent');
  }

  ngOnInit(): void {
    // this.search.observable.pipe(
    //   switchMap(searchItem => this.gameService.getAll(searchItem.value, 3))
    // )
    // .subscribe(items => this.games = items);

    this.gameService.getAll().subscribe(items => this.games = items);
  }

}
