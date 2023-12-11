import { inject } from "@angular/core";
import { SearchStore } from "search";
import { GameService } from "./game.service";
import { Observable } from "rxjs";
import { GameDto } from "../../../core/models/game.dto";

export function getContainerServices() {
  return {
    searchStore: inject(SearchStore),
    gameService: inject(GameService)
  }
}

export class GameApplication {
  private readonly container = getContainerServices();

  getAll(): Observable<GameDto[]> {
    return this.container.gameService.getAll('', 3);
  }
}
