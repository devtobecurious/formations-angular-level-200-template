import { Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ApplicationState } from 'projects/game/src/app/reducers';
import { isAuthenticated, selectProfilGamer } from '../../store/user.selectors';
import { authGamer } from '../../store/user.actions';
import { requestToGetListOfGamesAction } from '../../../game/store/games.actions';

@Component({
  selector: 'game-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private readonly store = inject(Store<ApplicationState>)

  isAuthenticated = this.store.selectSignal(select(isAuthenticated))

  login(): void {
    this.store.dispatch(authGamer())
    this.store.dispatch(requestToGetListOfGamesAction())
  }
}
