import { inject, Injectable } from "@angular/core";
import { Observable, of, shareReplay } from "rxjs";
import { Statistics } from "../models";
import { environment } from "projects/game/src/environments/environment";
import { HttpClient } from "@angular/common/http";

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
  private readonly http = inject(HttpClient);
  private stats$: Observable<Statistics> | undefined;

  getAll(): Observable<Statistics> {
    if(! this.stats$) {
      this.stats$ = this.http.get<Statistics>('url fictive').pipe(shareReplay(1));
    }

    return this.stats$;
  }
}
