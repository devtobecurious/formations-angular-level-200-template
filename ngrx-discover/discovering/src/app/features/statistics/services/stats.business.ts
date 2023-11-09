import { Observable, delay, of } from "rxjs";
import { Statistics } from "../models";

export class StatsBusiness {
  getAll(): Observable<Statistics> {
    return of([]).pipe(delay(1000));
  }
}
