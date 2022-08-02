import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from 'projects/game/src/environments/api';
import { environment } from 'projects/game/src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { People } from '../../../core/models/people';

type ApiResult = {
  results: [
    {
      name: string;
    }
  ]
};

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<People[]> {
    return this.httpClient.get<ApiResult>(api.people.url)
                          .pipe(
                            map(result => result.results.map(item => ({ surname: item.name }) ))
                            // map(result => {
                            //   let peoples: People[] = [];

                            //   // result.results.forEach(item => {
                            //   //   peoples.push({
                            //   //     surname: item.name,
                            //   //   })
                            //   // });

                            //   //peoples = result.results.map(item => ({ surname: item.name }) );

                            //   return peoples;
                            // })
                          );
  }
}
