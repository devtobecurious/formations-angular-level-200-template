import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Stats } from "../models";

//#region Helpers
export interface GetAll<T> {
  getAll(filter: string): Observable<T>;
}

/**
 *
 */
export interface GetAllStats extends GetAll<Stats> {
  /**
   *
   */
  getAll(filter: string): Observable<Stats>;
}
//#endregion

const fakeStatsService: GetAllStats = {
    getAll: (filter: string) => {
      let fakeResult: Stats = [{ annee: 2023, mois: 1, nbPartiesGagnees: 50, nbPartiesPerdues: 0 }]

      fakeResult = fakeResult.filter(item => item.annee > Number(filter));

      return of(fakeResult);
    }
}

@Injectable({
  providedIn: 'root',
  useValue: fakeStatsService
})
export class StatsInfra implements GetAllStats {
  getAll(filter: string): Observable<Stats> {
    throw new Error("Method not implemented.");
  }

}
