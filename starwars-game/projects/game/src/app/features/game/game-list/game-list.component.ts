import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GetAllGameInfrastructure } from '../services/game.service';
import { GameTableComponent } from '../game-table/game-table.component';
import { FormsModule } from '@angular/forms';
import { GameBusiness } from '../services/game.business';

@Component({
    selector: 'game-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css'],
    standalone: true,
    imports: [FormsModule, GameTableComponent]
})
export class GameListComponent implements OnInit {
  private readonly business = inject(GameBusiness);
  games: GameDto[] = [];
  searchItem = '';

  //constructor(private gameService: GetAllGameInfrastructure) { }

  ngOnInit(): void {
   //this.gameService.getAll(3).subscribe(items => this.games = items);
   this.business.getAll().subscribe({
    next: games => this.games = games
   })
  }

}
