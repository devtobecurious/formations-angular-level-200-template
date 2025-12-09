import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import StatItem from './models/stat-item';
import { HttpClient } from '@angular/common/http';

export interface GetAll<T> {
  getAll(): Observable<T[]>;
}

export interface GetAllStats extends GetAll<StatItem> { }

@Injectable({
  providedIn: 'root'
})
export class StatisticsService implements GetAllStats {
  private readonly httpClient = inject(HttpClient);

  getAll(): Observable<StatItem[]> {
    return this.httpClient.get<StatItem[]>('/api/statistics');
  }
}
