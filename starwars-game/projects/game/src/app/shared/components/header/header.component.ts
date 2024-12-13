import { Component, inject, NgModule, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SearchComponent } from 'search';
import { ApplicationState } from '../../../reducers';
import { selectAllGames } from '../../../features/game/store/games.selectors';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'game-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: false
})
export class HeaderComponent {
  private readonly store = inject(Store<ApplicationState>)
  private readonly games$ = this.store.pipe(select(selectAllGames))
  games$$ = toSignal(this.games$)
}

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    SearchComponent
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { } // SCAM
