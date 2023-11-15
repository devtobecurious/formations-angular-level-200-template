import { Component, OnInit, inject } from '@angular/core';
import { Observable, Subscription, takeUntil } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameInfra } from '../services/game.infra';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop"
import { GameApplication } from '../services/game.application';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent {
  // games: GameDto[] = [];
  searchItem = '';
  private sub = new Subscription();

  //private readonly gameService = inject(GameService);
  // games$ = this.gameService.getAll(3);
  // Façon 03 => pipe async
  games$ = inject(GameApplication).getAll();

  ngOnInit(): void {
     //this.gameService.getAll(3).subscribe(items => this.games = items);
     // Façon 01
    //this.sub.add(this.games$.subscribe(items => this.games = items));

    // Façon 02
    //this.games$.pipe(takeUntilDestroyed()).subscribe(); // angular 16
  }

  ngOnDestroy(): void {
    // Façon 01
    //this.sub.unsubscribe();
  }
}
