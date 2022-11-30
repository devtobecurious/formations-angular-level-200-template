import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Statistic } from '../models';

@Injectable({
  providedIn: null
})
export class StatsService {

  constructor() { }

  getAll(): Observable<Statistic[]> {
    throw new Error('Not implemented');
  }
}
