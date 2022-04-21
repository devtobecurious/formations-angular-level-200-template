import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GameDto } from '../../../core/models/game.dto';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private httpClient: HttpClient) { }

  getAll(game: GameDto[]) {
    return this.httpClient.get<any>(`/api/games//players`);
  }
}
