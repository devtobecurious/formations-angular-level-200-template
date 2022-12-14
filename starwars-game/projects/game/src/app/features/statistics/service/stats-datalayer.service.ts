import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGetAllStats, Statistic } from './stats.service';

@Injectable({
  providedIn: null
})
export class StatsDatalayerService implements IGetAllStats {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Statistic[]> {
    return this.httpClient.get<Statistic[]>('monurl');
  }
}
