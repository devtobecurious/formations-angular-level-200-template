import { inject, Injectable } from "@angular/core";
import { debounceTime, distinctUntilChanged, Observable, switchMap, tap } from "rxjs";
import { GameDto } from "../../../core/models/game.dto";
import { SearchService } from "search";
import { GameService } from "./game.service";

@Injectable({providedIn: 'root'})
export class GameApplication {
  private readonly searchStore = inject(SearchService);
  private readonly infra = inject(GameService);

  getAll(): Observable<GameDto[]> {
    return this.searchStore.asObservable.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      tap(search => prompt(search.value!)),
      // mergeMap(search => this.gameService.getAll(search.value ?? '', 3)) // je déclenche le subscribe enfant sans attendre la fin du dernier next
      // concatMap(search => this.gameService.getAll(search.value ?? '', 3)) // j'attends la fin, le retour de l'api
      switchMap(search => this.infra.getAll(search.value ?? '', 3)) // j'annule la dernière, pour ré exécuter de nouveau l'enfant
    )
  }
}
