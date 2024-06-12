import { inject, Injectable } from "@angular/core";
import { GameService } from "./game.service";
import { SearchService } from "search";
import { concatMap, debounceTime, distinctUntilChanged, filter, Observable, pairwise, switchMap } from "rxjs";
import { GameDto } from "../../../core/models/game.dto";

@Injectable({providedIn: 'root'})
export class GameApplication {
  private readonly infra = inject(GameService)
  private readonly searchStore = inject(SearchService)

  getAll(): Observable<GameDto[]> {
    return this.searchStore.asObservable
          .pipe(
            debounceTime(200), // prend le dernier next durant une période 200 ms
            distinctUntilChanged((prev, current) => prev.value !== current.value), // garde en cache la dernière valeur émise par le next et n'émet que si contenu du next différent
            switchMap(item => this.infra.getAll(item.value, 3)),
            // filter(items => items.find(item => item.success) !== null)
          )
  }
}
