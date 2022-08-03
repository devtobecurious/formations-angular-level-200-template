import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from 'projects/game/src/environments/api';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { LoggerService } from '../../../shared/services/logger.service';

@Injectable()
export class GameService {

  constructor(private httpClient: HttpClient, private logger: LoggerService) {
    this.logger.log('GameService: constructor');
  }

  getAll(nbItems: number = 100): Observable<GameDto[]> {
    return this.httpClient.get<GameDto[]>(api.games.url + '?max=' + nbItems);
  }
}
