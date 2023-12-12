import { Injectable, inject } from "@angular/core";
import { SearchStore } from "search";
import { GetAllGameService } from "./game.service";
import { Observable, catchError, concatMap, concatWith, distinctUntilChanged, filter, of, switchMap } from "rxjs";
import { Games } from "../models";

export function getContainerServices() {
  return {
    searchStore: inject(SearchStore),
    getAllGameService: inject(GetAllGameService)
  }
}

@Injectable({ providedIn: 'root' })
export class GameApplication {
  private readonly container = getContainerServices();

  getAll(): Observable<Games> {
    const parent$ = this.container.searchStore.asObservable;

    // const enfant$ = this.container.gameService.getAll(?????????, 3);
    return parent$.pipe( // si aucun click sur bouton de recherche, aucun résultat de games !!
      filter(item => typeof item !== 'undefined' && item !== null),
      filter(item => typeof item.value !== 'undefined' && item.value !== null),
      distinctUntilChanged((previous, current) => previous.value === current.value),
      switchMap(item => this.container.getAllGameService.getAll(item.value, 3)), // on ne met jamais de post put ou delete dans un switchMap
    );
  }
}
