import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { GameBusiness } from '../services/game.business';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  standalone: false
})
export class GameListComponent implements OnInit {
  private readonly gameBusiness = inject(GameBusiness);
  private readonly games$: Observable<GameDto[]> = this.gameBusiness.getAll();

  games: GameDto[] = [];
  searchItem = '';

  // constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.games$.subscribe({ next: items => this.games = items });
  }

}
