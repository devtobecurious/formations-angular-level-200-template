import { inject, Service } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { PeopleAPiResult } from '../models/character';
import { HttpClient } from '@angular/common/http';

@Service({autoProvided: false})
export class GetAllPeople {
  private readonly people$ = (inject(HttpClient)).get<PeopleAPiResult>('https://swapi.dev/api/people').pipe(
    shareReplay(1)
  )

  getAll(): Observable<PeopleAPiResult> {
    return this.people$;
  }
}
