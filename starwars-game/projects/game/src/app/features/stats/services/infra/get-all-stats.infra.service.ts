import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { count, delay, Observable, retry } from 'rxjs';
import { Stats } from '../../models/stat';

@Injectable()
export class GetAllStatsInfraService {
  private readonly httpClient = inject(HttpClient);
  private readonly stats$ = this.httpClient.get<Stats>('./stats.json').pipe(
    retry({ delay: 1000, count: 2 })
  );

  getAll(): Observable<Stats> {
    return this.stats$;
    //return this.httpClient.get<Stats>('./stats.json');
  }
}
