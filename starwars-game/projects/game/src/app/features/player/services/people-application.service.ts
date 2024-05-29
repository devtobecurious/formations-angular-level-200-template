import { inject, Injectable } from '@angular/core';
import { PeopleInfraService } from './people-infra.service';
import { Observable, shareReplay } from 'rxjs';
import { Persons } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PeopleApplicationService {
  private readonly infra = inject(PeopleInfraService);
  private people$: Observable<Persons> | null = null;

  getAll(): Observable<Persons> {
    if(this.people$ == null) {
      this.people$ = this.infra.getAll().pipe(
        shareReplay(1)
      );
    }

    return this.people$;
  }

  reset(): void {
    this.people$ = null;
  }
}
