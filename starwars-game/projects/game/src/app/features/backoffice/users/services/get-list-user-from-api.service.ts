import { computed, Injectable, resource, signal } from '@angular/core';
import { UsersFromApiResult } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class GetListUserFromApiService {
  filter = signal('');

  readonly usersResource = resource({
    defaultValue: { results: [] },
    request: this.filter,
    loader: (param) => this.getUsers(param.request),
  });

  readonly usersFirsts = computed(() => this.usersResource.value()?.results.slice(0, 3));

  getUsers(filter: string): Promise<UsersFromApiResult> {
    return fetch(`https://swapi.py4e.com/api/people/?search=${filter}`).then(res => res.json())
  }
}
