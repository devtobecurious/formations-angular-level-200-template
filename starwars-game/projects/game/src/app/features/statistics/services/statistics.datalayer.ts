import { Injectable, inject } from "@angular/core";
import { GetAllStatistics } from "./interfaces";
import { Observable, delay, of } from "rxjs";
import { Statistics } from "../models";
import { HttpClient } from "@angular/common/http";
import { environment } from "projects/game/src/environments/environment";

let result: Statistics = [{
  annee: 2023, mois: 3, nbPartiesGagnees: 100, nbPartiesPerdues: 12
}];

export class InMemoryStatisticsDataLayer implements GetAllStatistics {
  getAll(filters: { query: string; }): Observable<Statistics> {
    result = result.filter(item => item.annee > Number(filters.query));
    return of(result).pipe(delay(500));
  }
}

export const createStatisticsLayerFactory = () => environment.production ? new StatisticsDataLayer() : new InMemoryStatisticsDataLayer();

@Injectable({
  providedIn: 'root',
  useFactory: createStatisticsLayerFactory
})
export class StatisticsDataLayer implements GetAllStatistics {
  private http = inject(HttpClient);

  getAll(filters: { query: string; }): Observable<Statistics> {
    throw new Error("Method not implemented.");
  }
}
