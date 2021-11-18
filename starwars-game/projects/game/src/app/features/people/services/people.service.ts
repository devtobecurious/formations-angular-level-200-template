import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from '../../../core/models/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<People[]> {
    return this.httpClient.get<People[]>('https://swapi.dev/api/people');
  }
}
