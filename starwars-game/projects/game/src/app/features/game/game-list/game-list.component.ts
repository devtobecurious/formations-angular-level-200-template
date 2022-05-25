import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { SearchService } from '../../../shared/ui/components/top-search/search.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: GameDto[] = [];
  searchItem = '';

  @Output()
  public monOutput = new EventEmitter();

  constructor(private gameService: GameService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.store.subscribe(item => {
      this.searchItem = item.value;
      console.info('searchItem', this.searchItem);
    });

    console.info('last search item', this.searchService.store.value);

    this.gameService.getAll(3).subscribe(items => this.games = items);
  }

}
