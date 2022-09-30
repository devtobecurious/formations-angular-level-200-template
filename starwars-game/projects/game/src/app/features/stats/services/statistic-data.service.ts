import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticDataService {

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<any[]> {
    return this.httpClient.get<any[]>('urlVersMonApiStats');
  }
}
