import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { catchError, Observable, of, retry, shareReplay } from 'rxjs';
import { Planet } from '../models/planet';

@Service({autoProvided: false})
export class GetAllPlanetsInfra {
  private readonly httpClient = inject(HttpClient)
  private readonly planets$= this.httpClient.get<Planet[]>('https://swapi.info/api/planets').pipe(
    retry({delay: 200, count: 2}),
    catchError(() => of([])),
    shareReplay(1),
  )

  getAll(): Observable<Planet[]> {
    return this.planets$;
  }
}
