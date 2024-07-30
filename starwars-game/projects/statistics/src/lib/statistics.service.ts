import { inject, Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Statistics } from './models';




@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  getAll(): Observable<Statistics> {
    const result = [{key: '0', nbSuccess: 2, year: 2024 }, {key: '1', nbSuccess: 2, year: 2024 }];
    return of(result);//.pipe(delay(1500));
  }
}

@Injectable({
  providedIn: 'root'
})
export class StatisticsBusiness {
  private readonly infra = inject(StatisticsService);

  getAll(): Observable<Statistics> {
    return this.infra.getAll();
  }
}
