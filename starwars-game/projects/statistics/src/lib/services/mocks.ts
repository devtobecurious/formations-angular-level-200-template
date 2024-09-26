import { Observable, of } from "rxjs";
import { Statistics } from "../models";

export const fakeService =  {
  getAll(): Observable<Statistics> {
    const list: Statistics = [ { id: 1, month: 12, year: 2023, nbFailed: 0, nbSucess: 12 }];

    return of(list)
  }
}

//export default fakeService;
