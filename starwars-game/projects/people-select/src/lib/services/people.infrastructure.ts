import { inject, Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';
import { People } from '../models';
import { HttpClient } from '@angular/common/http';

type PersonApiResult = {
  name: string,
  gender: string
}

type ApiResult = {
  results: PersonApiResult[]
}

@Injectable({
  providedIn: 'root'
})
export class PeopleInfastructure {
  private readonly http =  inject(HttpClient);

  getAll(): Observable<People> {
    return this.http.get<ApiResult>('https://swapi.dev/api/people') // le get ne fait qu'un seul next + complete au retour de l'api
          .pipe(
            retry(2),
            map(result => result.results.map(item => ({ name: `${item.gender}. ${item.name}` })))
          )

          // shareReplay
  }
}
