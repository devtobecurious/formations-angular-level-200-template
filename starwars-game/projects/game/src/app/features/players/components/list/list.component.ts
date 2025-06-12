import { Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ApplicationState } from 'projects/game/src/app/reducers';
import { initWithFakeDataAction } from '../../store/players.actions';
import { AsyncPipe } from '@angular/common';
import { selectAllPlayers, selectAllPlayersWithOneGame } from '../../store/players.selectors';

@Component({
  selector: 'game-list',
  imports: [AsyncPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  private readonly store = inject(Store<ApplicationState>)
  // protected items$ = this.store.pipe(select(selectAllPlayersWithOneGame));
  protected items$ = this.store.pipe(select(selectAllPlayers(new Date())));

  init(): void {
    this.store.dispatch(initWithFakeDataAction({ items: [ {id: 1, firstName: 'Naruto'}, {id: 2, firstName: 'Sasuke'} ] }))
  }
}
