import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { ApiResult } from './models';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private readonly http = inject(HttpClient)
  private people$ = this.http.get<ApiResult>('https://swapi.dev/api/people').pipe(
    map(result => result.results.map(apiPerson => ({ surname: apiPerson.name, birthYear: apiPerson.birth_year }))),
    shareReplay(1) // mise en cache
  )

  getAll(): Observable<{ id ?: number,  surname: string, birthYear: number }[]> {
    return this.people$
  }
}
