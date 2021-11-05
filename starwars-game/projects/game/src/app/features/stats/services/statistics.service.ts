import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Stat {

}

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private httpCLient: HttpClient) { }

  getAll(): Observable<Stat[]> {
    return this.httpCLient.get<Stat[]>('une_url');
  }

}
