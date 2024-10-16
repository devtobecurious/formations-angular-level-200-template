import { inject, Injectable, isDevMode } from '@angular/core';
import { Statistics } from './models';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, retry, tap } from 'rxjs';
import { LogsService } from 'logs';

interface GetAllStats {
  getAll(): Observable<Statistics>
}

const fakeService: GetAllStats = {
  getAll(): Observable<Statistics> {
    const table: Statistics = []
    return of(table) // SYNC
  }
}

@Injectable({
  providedIn: 'root',
  useFactory: () => isDevMode() ? {} : new StatisticsInfra()
})
export class StatisticsInfra implements GetAllStats {
  private readonly logger = inject(LogsService)
  private readonly http = inject(HttpClient)

  getAll(): Observable<Statistics> {
    return this.http.get<Statistics>('/api/stats').pipe( // il fait un next et tout de suite après un complete
      retry(2),
      tap(stats => this.logger.log(stats.length.toString())),
      catchError(err => {
        this.logger.log('error, when get stats', err)
        return of(err)
      })
    )
  }
}
