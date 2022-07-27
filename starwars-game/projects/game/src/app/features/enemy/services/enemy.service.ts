import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { EnemyDTO } from '../../../core/models/enemy.dto';

@Injectable({
  providedIn: 'root'
})
export class EnemyService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<EnemyDTO[]> {
    return this.httpClient.get<EnemyDTO[]>('api/lesenemies').pipe(
      tap(item => console.info(item))
    );
  }
}
