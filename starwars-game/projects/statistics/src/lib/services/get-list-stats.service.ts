import { Injectable } from '@angular/core';
import { ListStatsComponent } from '../components/list-stats/list-stats.component';
import { delay, Observable, of } from 'rxjs';
import { StatisticList } from '../models/statistic';

@Injectable({
  providedIn: null
})
export class GetListStatsService {
  getAll(): Observable<StatisticList> {
    const fakeData: StatisticList = [
      {
        year: 2025,
        month: 1,
        nbSuccess: 10,
        nbFailures: 2
      },
      {
        year: 2025,
        month: 2,
        nbSuccess: 10,
        nbFailures: 2
      }
    ]
    return of(fakeData).pipe(
      delay(1000)
    )
  }
}
