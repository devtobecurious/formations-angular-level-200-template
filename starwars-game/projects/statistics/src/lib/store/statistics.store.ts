import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { initialValue, StatisticsState } from './statistics.state';
import { StatisticList } from '../models/statistic';

@Injectable({
  providedIn: 'root'
})
export class StatisticsStore {
  private readonly store = new BehaviorSubject<StatisticsState>(initialValue)

  dispatch(items: StatisticList): void {
    ///const array: StatisticList = [... this.store.value.items, ...items]
    const array: StatisticList = [...items]

    const state: StatisticsState = {
      items: array,
      isLoading: false
    }
    this.store.next(state)
  }

  get asObservable(): Observable<StatisticsState> {
    return this.store.asObservable()
  }
}
