import { AsyncPipe } from '@angular/common';
import { Component, inject, NgModule, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SearchComponent } from 'search';
import { selectAllGames } from '../../../features/game/store/games.selectors';
import { ApplicationState } from '../../../reducers';

@Component({
  selector: 'game-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private readonly store = inject(Store<ApplicationState>)
  gamesSuccess$ = this.store.pipe(select(selectAllGames))

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [HeaderComponent],
  imports: [SearchComponent, AsyncPipe],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
