import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { StatList } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GetListRawService {
  getAll(): Observable<StatList> {
    const array: StatList = [{ year: 2023, month: 1, nbSuccess: 10, nbFailed: 5 }, { year: 2023, month: 2, nbSuccess: 8, nbFailed: 7 }]

    return of(array).pipe(delay(1000))
  }
}
