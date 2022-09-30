import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/game/src/environments/environment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LoggerService } from '../../../shared/services/logger.service';
import { StatisticDataService } from './statistic-data.service';

@Injectable({
  providedIn: null,

  // useFactory: (httpClient: HttpClient) => { return environment.production ?
  //                           new StatisticMetierService(httpClient):
  //                           { getAll() {} } }
})
export class StatisticMetierService {

  constructor(private dataService: StatisticDataService, private logger: LoggerService) { }

  getAll(): Observable<any[]> {
    return this.dataService.getList().pipe(
      tap(items => this.logger.log('Stats', items)),
      map(items => items)
    );
  }
}
