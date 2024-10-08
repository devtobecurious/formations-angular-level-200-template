
import { inject, Injectable, isDevMode } from "@angular/core";
import { delay, Observable, of, retry } from "rxjs";
import { Statistics } from "../models";
import { HttpClient } from "@angular/common/http";

export interface GetAllStats  {
  getAll(): Observable<Statistics>
}

const fakeInfra: GetAllStats = {
  getAll(): Observable<Statistics> {
    const table: Statistics = []

    return of(table).pipe(delay(1500))
  }
}

@Injectable({
  providedIn: 'root',
  useFactory: () => isDevMode() ? fakeInfra : new StatisticsInfrastructure()
})
export class StatisticsInfrastructure implements GetAllStats {
  private readonly http = inject(HttpClient)

  getAll(): Observable<Statistics> {
    return this.http.get<Statistics>('api/stats').pipe(retry(2))
  }
}
