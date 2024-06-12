import { effect, inject, Injectable } from "@angular/core";
import { GameService } from "./game.service";
import { SearchService } from "search";
import { concatMap, debounceTime, distinctUntilChanged, filter, Observable, pairwise, switchMap } from "rxjs";
import { GameDto } from "../../../core/models/game.dto";
import { toObservable } from "@angular/core/rxjs-interop";

@Injectable({providedIn: 'root'})
export class GameApplication {
  private readonly infra = inject(GameService)
  private readonly searchStore = inject(SearchService)

  listenSignalSearch = effect(() => {
    if(this.searchStore.valueToLower() == '') {
      // Afficher popin
    }
  })

  getAll(): Observable<GameDto[]> {
    return toObservable(this.searchStore.valueToLower)
          .pipe(
            filter(item => item !== ''),
            debounceTime(200), // prend le dernier next durant une période 200 ms
            distinctUntilChanged((prev, current) => prev !== current), // garde en cache la dernière valeur émise par le next et n'émet que si contenu du next différent
            switchMap(item => this.infra.getAll(item, 3)),
            // filter(items => items.find(item => item.success) !== null)
          )
  }
}
