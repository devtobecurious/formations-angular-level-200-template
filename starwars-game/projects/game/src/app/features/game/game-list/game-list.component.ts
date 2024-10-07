import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { FormsModule } from '@angular/forms';
import { GameTableComponent } from '../game-table/game-table.component';

@Component({
    selector: 'game-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css'],
    standalone: true,
    imports: [FormsModule, GameTableComponent]
})
export class GameListComponent implements OnInit {

  games: GameDto[] = [];
  searchItem = '';

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getAll('', 3).subscribe(items => this.games = items);
  }

}
