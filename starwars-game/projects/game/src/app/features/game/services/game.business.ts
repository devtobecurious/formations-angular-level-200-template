import { Injectable, inject } from "@angular/core";
import { GameService } from "./game.service";
import { SearchBusService } from "../../../shared/components/search/services/search-bus.service";
import { Observable, of, shareReplay } from "rxjs";
import { GameDto } from "../../../core/models/game.dto";
import { LoggerService } from "../../../shared/tools/logging";

export interface GetAllGames {
  getAll(): Observable<GameDto[]>;
}

const enAttendantLaFinService: GetAllGames = {
  getAll: () => {
    const tableau: GameDto[] = [
      { id: 1, success: true, title: 'Youpi belle partie' }
    ];
    return of(tableau);
  }
}

@Injectable({
  providedIn: 'root',
  //useValue: enAttendantLaFinService
})
export class GameBusiness implements GetAllGames {
  private dataLayer = inject(GameService);
  private searchStore = inject(SearchBusService);
  private logger = inject(LoggerService);

  getAll(): Observable<GameDto[]> {
    this.logger.log('Oops oublié de finir la méthode');

    //throw new Error('Not implemented');
    return this.dataLayer.getAll(10).pipe(
      shareReplay(1)
    );
  }
}
