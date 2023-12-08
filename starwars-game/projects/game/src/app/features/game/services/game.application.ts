import { Injectable, inject } from "@angular/core";
import { SearchBusService } from "search";
import { GameService } from "./game.service";
import { Observable, catchError, distinctUntilChanged, switchMap } from "rxjs";
import { GameDto } from "../../../core/models/game.dto";

@Injectable()
export class GameApplication {
  private readonly searchStore = inject(SearchBusService);
  private readonly gameService = inject(GameService);

  getAll(): Observable<GameDto[]> {
    const parent$ = this.searchStore.asObservable;
    //const enfant$ = this.gameService.getAll();

    return parent$.pipe(
      distinctUntilChanged(),
      switchMap(search => this.gameService.getAll(search.value))
    );
  }
}
