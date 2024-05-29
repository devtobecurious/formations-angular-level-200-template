import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Persons } from '../models';
import { HttpClient } from '@angular/common/http';

type ApiPersonResult = {
  name: string
}

type ApiResult = {
  results: ApiPersonResult[]
}

@Injectable({
  providedIn: 'root'
})
export class PeopleInfraService {
  private readonly http = inject(HttpClient);

  getAll(): Observable<Persons> {
    return this.http.get<ApiResult>('https://swapi.dev/api/people').pipe(
      map(item => item.results.map(person => ({ surname: person.name })))
    )
  }
}
