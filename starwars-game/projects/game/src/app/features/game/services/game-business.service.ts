import { Injectable } from '@angular/core';
import { concatMap, mergeMap, tap } from 'rxjs/operators';
import { SearchService } from '../../../shared/ui/search/services';
import { GameService } from './game.service';

@Injectable({
  providedIn: 'root'
})
export class GameBusinessService {

  constructor(private searchService: SearchService, private gameService: GameService) { }

  search() {
    return this.searchService.store
    .pipe(
      tap(item => console.info('recherche en cours')),
      concatMap(item => this.gameService.getAll(3)),
    );
  }
}
