import { ApplicationState } from './../../../../reducers/index';
import { Component, inject } from '@angular/core';
import { GameDto } from '../../models';
import { Store } from '@ngrx/store';
import { commandToAddGame } from '../../store/games.actions';

@Component({
  selector: 'game-game-add',
  standalone: true,
  imports: [],
  templateUrl: './game-add.component.html',
  styleUrl: './game-add.component.css'
})
export class GameAddComponent {
  private readonly store = inject(Store<ApplicationState>)

  game: GameDto = {
    id: 0,
    success: true,
    title: 'J ai gagné'
  }

  save(): void {
    this.store.dispatch(commandToAddGame({ game: this.game }));
  }
}
