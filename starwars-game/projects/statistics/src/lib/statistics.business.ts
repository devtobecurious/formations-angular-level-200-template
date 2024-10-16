import { computed, inject, Injectable } from '@angular/core';
import { Statistics } from './models';
import { StatisticsInfra } from './statistics.infrastructure';
import { filter, map, Observable, shareReplay, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { SearchState, SearchStore } from 'search';

@Injectable({
  providedIn: 'root'
})
export class StatisticsBusiness {
  private readonly searchStore = inject(SearchStore)
  private readonly infra = inject(StatisticsInfra)
  private readonly stats$$ = toSignal(this.infra.getAll())
  private getAll$ = this.getAll().pipe(
    map(items => items.map(item => item.nbFailed))
  )

  private getAllMemoize$ = this.getAll$.pipe(shareReplay(1))

  getFailuresAsSignal() {
    return computed(() => this.stats$$()?.map(item => item.nbFailed))
  }

  reinit(): void {
  }

  getFailures(): Observable<number[]> {
    return this.getAllMemoize$
  }

  getAll(): Observable<Statistics> {
    const child$ = (search: SearchState) =>  this.infra.getAll().pipe(
      filter(items => items.length > 0), // le component ne recevra aucun tableau vide !
      map(items => {
        const result = items.filter(item => item.year == (new Date()).getFullYear())
        return result
      }))

      return this.searchStore.asObservable.pipe(
        switchMap(search => child$(search))
      )
  }
}
