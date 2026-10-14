import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Statistics } from '../models/statistic';

@Injectable({
  providedIn: 'root'
})
export class GetListStatsService {
  getAll(): Observable<Statistics> {
    return of([{month: 5, year: 2026, nbSuccess: 1, nbFailure: 250}]).pipe(delay(1000))
  }
}
