import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { StatsDatalayerService } from './stats-datalayer.service';

export type Statistic = {
  year: number
}

export interface IGetAllStats {
  getAll(): Observable<Statistic[]>;
}

@Injectable({
  providedIn: 'root'
})
export class StatsService implements IGetAllStats {

  constructor(private readonly dataLayer: StatsDatalayerService) { }

  getAll(): Observable<Statistic[]> {
    return this.dataLayer.getAll().pipe(filter(items => items.length > 0));
  }
}
