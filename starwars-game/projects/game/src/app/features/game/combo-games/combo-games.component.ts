import { Component, computed, effect, inject, signal } from '@angular/core';
import { ApplicationState } from '../../../reducers';
import { select, Store } from '@ngrx/store';
import { selectAllGames, selectAllGamesSuccess } from '../store/games.selector';

@Component({
  selector: 'game-combo-games',
  standalone: true,
  imports: [],
  templateUrl: './combo-games.component.html',
  styleUrl: './combo-games.component.css'
})
export class ComboGamesComponent {
  private readonly store = inject(Store<ApplicationState>);
  // games$ = this.store.pipe(select(selectAllGames));
  games$$ = this.store.selectSignal(selectAllGamesSuccess);

  // titre = signal<string>('Liste des games');
  // titreMaj = computed(() => this.titre().toUpperCase());

  // titreEffect = effect(()=> {
  //   console.info(this.titre());
  // });

  ngOnInit(): void {
    // this.titre.set('Nouveau titre');
  }
}
