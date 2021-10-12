import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EnemyDto } from '../../../core/models/enemy';

export declare type PeopleApiResult = {
  results: [{
    name: string,
    eye_color: string
  }]
}

@Injectable({
  providedIn: 'root'
})
export class EnemyService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<EnemyDto[]> {
    // const list: { id: number, name: string}[] = [];
    // const list: EnemyDto[] = [];

    // list.push(
    //   {
    //     id: 1,
    //     name: 'droide 1235'
    //   },
    //   {
    //     id: 2,
    //     name: 'droide 1236'
    //   });

//    return of(list);

    return this.httpClient.get<PeopleApiResult>('https://swapi.dev/api/people')
                          .pipe(
                            map(resultApi => {
                              const returnArray: EnemyDto[] = [];

                              resultApi.results.forEach(item => {
                                returnArray.push({
                                  name: item.name,
                                  eyeColor: item.eye_color,
                                  id: 0
                                })
                              });

                              return returnArray;
                            })
                          );
  }
}
