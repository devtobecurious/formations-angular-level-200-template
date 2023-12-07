import { Injectable, inject } from "@angular/core";
import { Observable, of } from "rxjs";
import { Statistics } from "../models";
import { environment } from "projects/game/src/environments/environment";

export function createInfra() {
  return {
    stats: inject(StatisticsInfra)
  }
}

const fakeService: StatisticsInfra = {
  getAll() {
    return of([])
  }
}

@Injectable({
  providedIn: 'root',
  //useValue: fakeService
  useFactory: () => environment.production ? new StatisticsInfra() : fakeService
})
export class StatisticsInfra {
  getAll(): Observable<Statistics> {
    throw new Error('Not implemented exception');
  }
}
