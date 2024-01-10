import { ApplicationState } from 'projects/game/src/app/reducers';
import { Injectable, inject } from "@angular/core";
import { Observable, delay, of, tap } from "rxjs";
import { Statistics } from "../models";
import { Store, select } from "@ngrx/store";
import { initStateWithFirstArrayAction } from '../store/statistics.actions';
import { selectAllStats } from '../store/statistics.selectors';

@Injectable({ providedIn: 'root' })
export class StatsInfrastructure {
  getAll(): Observable<Statistics> {
    const stats: Statistics = [
      { annee: 2019, mois: 1, nbGames: 10 },
      { annee: 2024, mois: 1, nbGames: 0 },
      { annee: 2023, mois: 1, nbGames: 2 },
    ];

    return of(stats).pipe(delay(1000));
  }
}

@Injectable({ providedIn: 'root' })
export class StatsBusiness {
  private readonly infra = inject(StatsInfrastructure);
  private readonly store = inject(Store<ApplicationState>);

  getAll(): Observable<Statistics> {
    // Approche infra first
    // return this.infra.getAll().pipe(
    //   tap(stats => this.store.dispatch(initStateWithFirstArrayAction({ statistics: stats })))
    // );

    // Approche store first
    return this.store.pipe(select(selectAllStats));
  }

  initialize(): void {
    console.info('StatsBusiness.initialize')

    const stats: Statistics = [
      { annee: 2019, mois: 1, nbGames: 10 },
      { annee: 2024, mois: 1, nbGames: 0 },
      { annee: 2023, mois: 1, nbGames: 2 },
    ];
    this.store.dispatch(initStateWithFirstArrayAction({ statistics: stats }));
  }
}
