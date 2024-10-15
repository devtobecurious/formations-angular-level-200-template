import { inject, Injectable, isDevMode } from '@angular/core';
import { Statistics } from './models';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

interface GetAllStats {
  getAll(): Observable<Statistics>
}

const fakeService: GetAllStats = {
  getAll(): Observable<Statistics> {
    const table: Statistics = []
    return of(table)
  }
}

@Injectable({
  providedIn: 'root',
  useFactory: () => isDevMode() ? {} : new StatisticsInfra()
})
export class StatisticsInfra implements GetAllStats {
  private readonly http = inject(HttpClient)

  getAll(): Observable<Statistics> {
    return this.http.get<Statistics>('/api/stats')
  }
}
