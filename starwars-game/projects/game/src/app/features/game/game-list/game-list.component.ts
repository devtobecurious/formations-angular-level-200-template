import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: GameDto[] = [];
  searchItem = '';

  constructor(private gameService: GameService) { }

  logView(): void {
    console.info('GameListComponent');
  }

  capitalizeFirstChar(value: string): string {
    // soit je memoize le résultat
    // soit je vais lui préférer une Pipe
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  get computed(): number {
    console.info('GameListComponent, computed');
    return 2 * 2; // pas de calcul lourd ! => ici chercher à memoizer !
  }

  ngOnInit(): void {
    this.gameService.getAll(3).subscribe(items => this.games = items);
  }

}
