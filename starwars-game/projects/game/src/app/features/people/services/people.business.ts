import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { People } from '../models';
import { environment } from 'projects/game/src/environments/environment';
import { PeopleLayer } from './infras/people.layer';

export interface GetAll<T> {
  getAll(): Observable<T>;
}

export interface GetAllPeople extends GetAll<People> {
  getAll(): Observable<People>;
}

export const fakeService: GetAllPeople = {
  getAll(): Observable<People> {
    return of([]);
  }
}

@Injectable({
  providedIn: 'root',
  // useValue: fakeService
  // useFactory: () => environment.production ? new PeopleBusiness() : fakeService
})
export class PeopleBusiness implements GetAllPeople {
  constructor(private readonly layer: PeopleLayer) {}

  getAll(): Observable<People> {
    return this.layer.getAll().pipe(
      map(result => result.results.map(item => ({ prenom: `${item.gender}: ${item.name}` })))
    );
  }

}
