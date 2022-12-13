import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGetAllStats, Statistic } from './stats.service';

@Injectable({
  providedIn: null
})
export class StatsDatalayerService implements IGetAllStats {

  constructor() { }

  getAll(): Observable<Statistic[]> {
    throw new Error('Method not implemented.');
  }
}
