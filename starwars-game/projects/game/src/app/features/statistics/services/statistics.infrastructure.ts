import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { Statistic } from "../models";

@Injectable({providedIn: 'root'})
export class StatisticsInfrastructure {
  getAll(): Observable<Statistic[]> {
    const table: Statistic[] = [
      { month: 1, year: 2024, nbFailed: 0, nbSuccess: 24 },
      { month: 7, year: 2024, nbFailed: 2, nbSuccess: 1 }
    ];

    return of(table).pipe(delay(1500));
  }
}
