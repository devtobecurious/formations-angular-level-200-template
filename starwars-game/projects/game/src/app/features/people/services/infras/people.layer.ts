import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type ApiPersonResult = {
  gender: string,
  name: string
};

export type ApiResult = {
  results: ApiPersonResult[]
}

@Injectable({
  providedIn: 'root'
})
export class PeopleLayer {
  constructor(private readonly httpClient: HttpClient) {
  }

  getAll(): Observable<ApiResult> {
    return this.httpClient.get<ApiResult>('https://swapi.dev/api/people');
  }
}
