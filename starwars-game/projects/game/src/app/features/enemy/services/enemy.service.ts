import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { EnemyDTO } from '../../../core/models/enemy.dto';

@Injectable({
  providedIn: 'root'
})
export class EnemyService {

  constructor() { }

  getAll(): Observable<EnemyDTO[]> {
    return of([
      {
            id: Math.random() * 100,
            libelle: 'Test' + Math.random(),
            life: 100,
            xp: 100
      },
      {
        id: Math.random() * 100,
        libelle: 'Test' + Math.random(),
        life: 100,
        xp: 100
      }
    ]).pipe(delay(1000))
  }
}
