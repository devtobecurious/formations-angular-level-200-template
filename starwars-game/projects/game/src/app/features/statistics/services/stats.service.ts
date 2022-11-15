import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from 'projects/game/src/environments/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Statistic, StatisticI, StatT } from '../models';

export type ApiStatResult = {
  results: [
    {
      fields: {
        gc_obo_type_c: string
      }
    }
  ]
}

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<StatisticI[]> {
    return this.httpClient.get<ApiStatResult>(api.stats.url).pipe(
      // map(item => {
      //   let list: StatisticI[] = [];

      //   list = item.results.map(apiResultItem => ({ month: 1, year: 1, nbGames: 2, cequejeveux: '' }) );

      //   return list;
      // })

      map(item => item.results.map(apiResultItem => ({ month: 1, year: 1, nbGames: 2, cequejeveux: '' }) ))
    );
  }
}
