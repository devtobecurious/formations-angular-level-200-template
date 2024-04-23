import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Statistics } from "../models";
import { environment } from "projects/game/src/environments/environment";

const mockService = {
  getAll(): Observable<Statistics> {
    const table: Statistics = [
      { annee: 2023, mois: 1, nbGagnees: 2, nbPerdues: 8 },
      { annee: 2024, mois: 5, nbGagnees: 8, nbPerdues: 2 }
    ];

    return of(table);
  }
}

@Injectable({
  providedIn: 'root',
  // useValue: mockService
  useFactory: () => environment.production ? new StatisticsInfrastructure() : mockService
})
export class StatisticsInfrastructure {
  getAll(): Observable<Statistics> {
    throw new Error('Not implemented');
  }
}
