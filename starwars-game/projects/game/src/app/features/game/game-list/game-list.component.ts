import { Component, computed, effect, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchStore } from 'design-system';
import { toSignal } from '@angular/core/rxjs-interop';
import { GameBusinessService } from '../services/game.business.service';

@Component({
    selector: 'game-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['./game-list.component.css'],
    standalone: false
})
export class GameListComponent {
  protected readonly gameItems = (inject(GameBusinessService)).getAll();

  searchItem = '';

}
