import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { ApplicationState } from 'src/app/reducers';
import { demandeDataStatsAApiPourEffect, miseAjourStateAvecRetourApiPourReducer } from '../store/actions';
import { Stats } from '../models';
import { onErrorStatsSelector, selectAllStats, selectStatsGamesGagnees } from '../store/selector';

@Component({
  selector: 'app-list-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-stats.component.html',
  styleUrls: ['./list-stats.component.css']
})
export class ListStatsComponent {
  private readonly store = inject(Store<ApplicationState>);
  stats$ = this.store.pipe(select(selectStatsGamesGagnees));
  onError$ = this.store.pipe(select(onErrorStatsSelector));

  load(): void {
    // const items: Stats = [
    //   { annee: 2023, mois: 3, nbPartiesGagnees: 0, nbPartiesPerdues: 20 },
    //   { annee: 2022, mois: 4, nbPartiesGagnees: 10, nbPartiesPerdues: 40 }
    // ]
    // this.store.dispatch(miseAjourStateAvecRetourApiPourReducer({ items }));
    this.store.dispatch(demandeDataStatsAApiPourEffect());
  }

  ngOnInit(): void {
    // this.store.dispatch(demandeDataStatsAApiPourEffect());

    // Je veux mettre à jour mon état avec les données envoyées dans mon action

  }
}
