import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { People } from './models';
import { HttpClient } from '@angular/common/http';

type OnePersonApiResult = {
  name: string,
  hair_color: string
}

type ApiResult = {
  results: OnePersonApiResult[]
}

type ApiResultWithPage = { page: number } & ApiResult


@Injectable({
  providedIn: 'root'
})
export class SelectPeopleService {
  private readonly http = inject(HttpClient);

  getAll(): Observable<People[]> {
    return this.http.get<ApiResult>('swapi').pipe(
      map(items => items.results.map(item => ({ name: item.name, hairColor: item.hair_color })))
    )
  }
}
