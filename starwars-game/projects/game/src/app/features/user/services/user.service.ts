import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  save(user: User): Observable<User> {
    // save user to database
    return this.httpClient.post<User>('/api/user', user);
  }
}
