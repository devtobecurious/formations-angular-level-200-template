import { Injectable, inject } from "@angular/core";
import { Observable, of } from "rxjs";
import { Statistics } from "../models";
// import { environment } from "projects/game/src/environments/environment";

export function createInfra() {
  return {
    stats: inject(StatisticsInfra)
  }
}

const fakeService: StatisticsInfra = {
  getAll() {
    const result: Statistics = [
      { annee: 2023, mois: 12, nbGagnees: 500, nbPerdues: 0 }
    ];
    return of(result);
  }
}

@Injectable({
  providedIn: 'root',
  //useValue: fakeService
  useFactory: () => fakeService
})
export class StatisticsInfra {
  getAll(): Observable<Statistics> {
    throw new Error('Not implemented exception');
  }
}
