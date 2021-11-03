import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User, UserBis } from '../../../core/models/user';

export declare type ApiResult = {
  results: [
    {
      name: string
    }
  ]
}

@Injectable({
  providedIn: null
})
export class ProfileService {
  constructor(private httpCLient: HttpClient) {
    console.info('I am alive !!!');

  }

  getAll(): Observable<UserBis[]> {
    return this.httpCLient.get<ApiResult>('https://swapi.dev/api/people')
                          .pipe(map(item => {
                              let array: UserBis[] = [];
                              array = item.results.map(data => {
                                return {
                                  pictureUrl: '',
                                  surname: data.name,
                                  weaponType: ''
                                };
                              });

                              return array;
                          }));
  }
}
