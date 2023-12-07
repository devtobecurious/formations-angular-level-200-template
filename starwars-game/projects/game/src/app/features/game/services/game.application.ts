import { Injectable, inject } from "@angular/core";
import { SearchBusService } from "search";
import { GameService } from "./game.service";
import { Observable, catchError } from "rxjs";
import { GameDto } from "../../../core/models/game.dto";

@Injectable()
export class GameApplication {
  private readonly store = inject(SearchBusService);
  private readonly gameService = inject(GameService);

  getAll(): Observable<GameDto[]> {
    this.store.asObservable.subscribe(item => {});
    return this.gameService.getAll();
  }
}
