import { inject, Injectable } from '@angular/core';
import { delay, Observable, of, map, switchMap, shareReplay, filter } from 'rxjs';
import { Statistics } from './models';
import { SearchStore } from 'search';




@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  getAll(searchText: string): Observable<Statistics> {
    const result = [{key: '0', nbSuccess: 2, year: 2024 }, {key: '1', nbSuccess: 2, year: 2024 }];
    return of(result.filter(item => item.year === +searchText || item.nbSuccess === +searchText))
    // return of(result);//.pipe(delay(1500));
  }
}

@Injectable({
  providedIn: 'root'
})
export class StatisticsBusiness {
  private readonly infra = inject(StatisticsService);
  private readonly searchStore = inject(SearchStore);

  // 1. Etape 1. On doit garder la meme instance pour travailler avec le sharereplay
  // private getListStats = this.searchStore.asObservable().pipe(
  //   switchMap(({value}) => this.infra.getAll(value)),
  //   shareReplay()
  // )
  private getListStats: Observable<Statistics> | null | undefined = null;

  reset(): void {
    this.getListStats = null;
  }

  getAll(): Observable<Statistics> {
    if(this.getListStats == null) {
      this.getListStats = this.searchStore.asObservable().pipe(
        // filter(({value}) => value != ''),
        switchMap(({value}) => this.infra.getAll(value)),
        shareReplay()
      )
    }

    return this.getListStats;
  }
}
