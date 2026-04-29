import { inject, Injectable } from '@angular/core';
import { GetAllStatsFromApi } from '../infrastructure/get-all-stats-from-api';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Statistics, StatisticWithPercentage } from '../../models/statistic';
import { StatisticsState } from '../../store/statistics-state';
import { UiStore } from '../../store/ui-store';

@Injectable({
  providedIn: null
})
export class ProvideAllStatistics {
  private readonly uiStore = inject(UiStore);
  private readonly infra = inject(GetAllStatsFromApi);
  private stats$ = this.infra.getAll();

  getAllWithPercentage(): Observable<StatisticsState> {
    return this.stats$.pipe(
      tap(() => this.uiStore.dispatch({ loading: true, provider: 'ProvideAllStatistics' })),
      map((stats: Statistics) => stats.map(stat => ({
        ...stat,
        successPercentage: stat.nbSuccesses + stat.nbFails > 0
          ? (stat.nbSuccesses / (stat.nbSuccesses + stat.nbFails)) * 100
          : 0
      }))),
      map((statsWithPercentage: StatisticWithPercentage[]) => ({
        items: statsWithPercentage,
        loading: false,
      })),
      tap((state: StatisticsState) => this.uiStore.dispatch({ loading: false, provider: 'ProvideAllStatistics' })),
      catchError((error) => {
        this.uiStore.dispatch({ loading: false, error: error, provider: 'ProvideAllStatistics' });
        const stateWithError: StatisticsState = {
          items: [],
          loading: false,
          error: error
        };
        return of(stateWithError)
      })
    );
  }
}
