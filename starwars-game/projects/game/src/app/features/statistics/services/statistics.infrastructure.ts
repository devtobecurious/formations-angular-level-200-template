import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Statistics } from "../models/statistics";
import { environment } from "projects/game/src/environments/environment";



@Injectable({
  providedIn: 'root',
  useFactory: () => {
    if (environment.production) {
      return new StatisticsInfrastructure();
    } else {
      return {
          getAll(): Observable<Statistics> {
            const table: Statistics = [{ year: 2023, month: 3, nbLost: 0, nbWin: 10 }, { year: 2023, month: 3, nbLost: 0, nbWin: 10 }, { year: 2023, month: 3, nbLost: 0, nbWin: 10 }]
            return of(table)
          }
        }
    }
  }

  // useValue:{
  //   getAll(): Observable<Statistics> {
  //     const table: Statistics = [{ year: 2023, month: 3, nbLost: 0, nbWin: 10 }, { year: 2023, month: 3, nbLost: 0, nbWin: 10 }, { year: 2023, month: 3, nbLost: 0, nbWin: 10 }]
  //     return of(table)
  //   }
  // }
})
export class StatisticsInfrastructure {
  getAll(): Observable<Statistics> {
    throw new Error('Ta oublié de coder !')
  }

  getAllTest(): Observable<Statistics> {
    throw new Error('Ta oublié de coder !')
  }
}
