import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleDto } from '../../../core/models/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<PeopleDto[]> {
    return this.httpClient.get<PeopleDto[]>('https://swapi.dev/api/people');
  }
}
