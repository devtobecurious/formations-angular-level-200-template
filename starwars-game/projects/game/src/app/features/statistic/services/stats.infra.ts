import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Stats } from "../models";

//#region Helpers
export interface GetAll<T> {
  getAll(): Observable<T>;
}

/**
 *
 */
export interface GetAllStats extends GetAll<Stats> {
  /**
   *
   */
  getAll(): Observable<Stats>;
}
//#endregion

const fakeStatsService: GetAllStats = {
    getAll: () => {
      const fakeResult: Stats = [{ annee: 2023, mois: 1, nbPartiesGagnees: 50, nbPartiesPerdues: 0 }]
      return of(fakeResult);
    }
}

@Injectable({
  providedIn: 'root',
  useValue: fakeStatsService
})
export class StatsInfra implements GetAllStats {
  getAll(): Observable<Stats> {
    throw new Error("Method not implemented.");
  }

}
