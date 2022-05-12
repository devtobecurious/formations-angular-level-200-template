import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StatItem } from '../statistic/stat-list/stat-list.component';

@Injectable({
  providedIn: null
})
export class StatsService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<StatItem[]> {
    //return of([{month: 1, nbGames: 0}, {month: 2, nbGames: 12}]);
    return this.httpClient.get<StatItem[]>('/api/stats');
  }
}
