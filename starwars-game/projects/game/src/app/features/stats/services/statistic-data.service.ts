import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Stat } from '../models';

const useFake = {
  getList(): Observable<Stat[]> {
    return of([
      { dateGame: new Date(),
        titre: 'Test 1',
        value: 20 }
    ]);
  }
}

@Injectable({
  providedIn: 'root',
  useValue: useFake
})
export class StatisticDataService {

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<Stat[]> {
    return this.httpClient.get<any[]>('urlVersMonApiStats');
  }
}
