import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from 'projects/game/src/environments/api';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { SearchService } from '../../../shared/ui/search/search.service';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class GameService {

  constructor(private httpClient: HttpClient,
              private search: SearchService) { }

  getAll(nbItems: number = 100): Observable<GameDto[]> {
    return this.search.observable.pipe(
      switchMap(searchItem => this.getAllBrut(searchItem.value, nbItems))
    );
  }

  getAllBrut(searchValue: string, nbItems: number = 100) {
    return this.httpClient.get<GameDto[]>(api.games.url + '?max=' + nbItems);
  }
}
