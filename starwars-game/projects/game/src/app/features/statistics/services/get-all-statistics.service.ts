import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { Statistics } from "../models";

@Injectable({providedIn: 'root'})
export class GetAllStatisticsService {
  getAll(): Observable<Statistics> {
    const fakeData: Statistics = [
      { year: 2024, month: 11, nbSuccess: 1, nbFailed: 10 },
      { year: 2024, month: 10, nbSuccess: 5, nbFailed: 5 },
    ]

    return of(fakeData).pipe(delay(1500))
  }
}
