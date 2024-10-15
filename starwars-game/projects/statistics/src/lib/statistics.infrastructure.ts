import { inject, Injectable } from '@angular/core';
import { Statistics } from './models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsInfra {
  private readonly http = inject(HttpClient)

  getAll(): Observable<Statistics> {
    return this.http.get<Statistics>('/api/stats')
  }
}
