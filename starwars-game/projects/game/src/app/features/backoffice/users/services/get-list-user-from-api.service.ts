import { computed, inject, Injectable, resource, signal } from '@angular/core';
import { UsersFromApiResult } from '../models/user';
import { rxResource } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { HttpClient, httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetListUserFromApiService {
  private readonly http = inject(HttpClient);
  filter = signal(1);  //

  readonly usersResource = rxResource({
    defaultValue: { results: [] },
    request: this.filter,
    //loader: (param) => this.getUsers(param.request),
    loader: (param) => this.getUsers(param.request)
  });

  // readonly usersResource = httpResource('`https://swapi.py4e.com/api/people/?page=${page}`', {
  //   defaultValue: { results: [] }
  // });

  readonly usersFirsts = computed(() => this.usersResource.value()?.results.slice(0, 3));

  // getUsers(filter: string): Promise<UsersFromApiResult> {
  //   return fetch(`https://swapi.py4e.com/api/people/?search=${filter}`).then(res => res.json())
  // }
  getUsers(page: number): Observable<UsersFromApiResult> {
    return this.http.get<UsersFromApiResult>(`https://swapi.py4e.com/api/people/?page=${page}`);
  }
}
