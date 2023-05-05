import { Observable, switchMap } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { factorySearchService } from '../../../shared/ui/search/services';
import { GameService } from './game.service';
import { GamesAsObs } from '../models';
import { RouteService } from './route.service';
@Injectable({
  providedIn: 'root'
})
export class GameBusiness {
  private readonly searchService = factorySearchService();
  private readonly gameService = inject(GameService);
  private readonly routeService = inject(RouteService);

  searchAll(): GamesAsObs {
    return this.searchService.asObservable.pipe(
      switchMap(item => this.gameService.getAll(item.value, 3))
    );
  }
}
