import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EnemyDto } from '../../../core/models/enemy';

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

    return this.httpClient.get<EnemyDto[]>('uneurl');
  }
}
