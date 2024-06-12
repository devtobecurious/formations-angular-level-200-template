import { Component, inject, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchService } from 'search';
import { GameTableComponent } from '../game-table/game-table.component';
import { FormsModule } from '@angular/forms';
import { GameApplication } from '../services/game.application';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'game-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css'],
    standalone: true,
    imports: [FormsModule, GameTableComponent, AsyncPipe]
})
export class GameListComponent {
  private readonly application = inject(GameApplication)
  games$ = this.application.getAll()
  searchItem = '';
}
