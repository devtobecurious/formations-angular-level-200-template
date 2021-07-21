import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { SearchService } from '../../../shared/services/search.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit, OnDestroy {
  games: GameDto[] = [];
  searchItem = '';
  private subscriptions: Subscription[] = [];

  constructor(private gameService: GameService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.subscriptions.push( this.gameService.getAll(3).subscribe(items => this.games = items) );
    this.subscriptions.push( this.searchService.state.subscribe(item => this.games = this.games.filter(value => value.title == item)) );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(item => item.unsubscribe());

    // takeUntil
    // | async
  }

}
