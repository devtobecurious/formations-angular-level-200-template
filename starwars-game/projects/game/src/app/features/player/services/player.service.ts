import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlayerDto, PlayerMetier } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private httpClient: HttpClient) {
    console.info('PlayerService');
  }

  getPlayers() {}

  addOne(player: PlayerMetier): Observable<PlayerMetier> {
    return this.httpClient.post<PlayerMetier>('url', player).pipe(
      map(player => new PlayerMetier(player.name, player.isJedi, player.temple))
    );
  }

  addOneI(player: PlayerMetier): Observable<PlayerDto> {
    return this.httpClient.post<PlayerDto>('url', player);
  }

  addOneM(player: PlayerMetier): Observable<PlayerMetier> {
    return this.httpClient.post<PlayerDto>('url', player);
  }
}
