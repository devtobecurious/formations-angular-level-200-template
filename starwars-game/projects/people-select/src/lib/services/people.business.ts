import { inject, Injectable } from '@angular/core';
import { PeopleInfastructure } from './people.infrastructure';
import { filter, Observable } from 'rxjs';
import { People } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PeopleBusiness {
  private readonly infra = inject(PeopleInfastructure);

  getAll(): Observable<People> {
    return this.infra.getAll().pipe(
      filter(items => items.length > 0)
    )
  }
}
