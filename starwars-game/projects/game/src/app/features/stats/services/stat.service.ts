import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<StatItem[]> {
    return this.http.get<StatItem[]>('test');
  }
}
