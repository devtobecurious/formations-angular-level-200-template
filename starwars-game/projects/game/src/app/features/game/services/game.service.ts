import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { api } from 'projects/game/src/environments/api';
import { environment } from 'projects/game/src/environments/environment';
import { delay, Observable, of } from 'rxjs';
import { GetAll } from '../../../core/custom-types';
import { GameDto } from '../../../core/models/game.dto';


export interface GetAllGame extends GetAll<GameDto> {}

const fakeService: GetAllGame = {
  getAll(filter) {
      const test: GameDto[] = [];
      return of(test).pipe(delay(1000));
  },
}

@Injectable({
  providedIn: 'root',
  //useValue: fakeService
  useFactory: () => environment.production ? new GetAllGameInfrastructure() : fakeService
})
export class GetAllGameInfrastructure implements GetAllGame {
  private readonly httpClient = inject(HttpClient);

  // constructor(private httpClient: HttpClient) { }

  getAll(filter: string): Observable<GameDto[]> {
    return this.httpClient.get<GameDto[]>(api.games.url + '?max=' + 3);
  }
}
