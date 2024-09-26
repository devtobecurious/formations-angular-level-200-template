import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Statistics } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAllStatisticsInfrastructure {
  private readonly http = inject(HttpClient);

  getAll(): Observable<Statistics> {
    return this.http.get<Statistics>('/api/stats');
  }
}
