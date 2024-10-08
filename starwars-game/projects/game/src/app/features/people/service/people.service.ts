import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, pipe, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleInfrastructure {
  private people$ = (inject(HttpClient)).get<{results: []}>('https://swapi.dev/api/people')
                                        .pipe(shareReplay(1))

  getAll(): Observable<{results: []}> {
    return this.people$;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PeopleBusiness {
  private readonly infra = inject(PeopleInfrastructure)

  getAll(): Observable<{ results: []}> {
    return this.infra.getAll()
  }
}
