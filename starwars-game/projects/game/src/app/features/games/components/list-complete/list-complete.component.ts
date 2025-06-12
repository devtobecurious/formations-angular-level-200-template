import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ApplicationState } from 'projects/game/src/app/reducers';
import { selectGames, selectSuccessGames } from '../../../game/store/games.selectors';

@Component({
  selector: 'game-list-complete',
  imports: [AsyncPipe],
  templateUrl: './list-complete.component.html',
  styleUrl: './list-complete.component.css'
})
export class ListCompleteComponent {
  private readonly store = inject(Store<ApplicationState>)
  protected items$ = this.store.pipe(select(selectSuccessGames));
}
