import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { LoggerService } from '../../../shared/tools/logger.service';
import { SearchService } from '../../../shared/ui/components/search/search.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: GameDto[] = [];
  searchItem = '';

  constructor(private gameService: GameService,
              private searchService: SearchService,
              private log: LoggerService) { }

  // @log()
  ngOnInit(): void {
    this.log.log('ngOnInit');

    this.searchService.state.subscribe(item => {

      this.gameService.getAll(item, 3).subscribe(items => this.games = items);
    });


  }

}
