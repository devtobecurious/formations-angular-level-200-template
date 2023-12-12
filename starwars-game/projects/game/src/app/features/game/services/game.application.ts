import { inject } from "@angular/core";
import { SearchStore } from "search";
import { GameService } from "./game.service";
import { Observable } from "rxjs";
import { Games } from "../models";

export function getContainerServices() {
  return {
    searchStore: inject(SearchStore),
    gameService: inject(GameService)
  }
}

export class GameApplication {
  private readonly container = getContainerServices();

  getAll(): Observable<Games> {
    return this.container.gameService.getAll('', 3);
  }
}
