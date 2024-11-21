import { inject, Injectable } from "@angular/core";
import { concatMap, Observable, switchMap } from "rxjs";
import { GameDto } from "../../../core/models/game.dto";
import { GameService } from "./game.service";
import { SearchStore } from "search";

@Injectable( { providedIn: 'root'})
export class GameBusiness {
  private readonly infra = inject(GameService)
  private readonly searchStore = inject(SearchStore)

  getAll(): Observable<GameDto[]> {
    return this.searchStore.asObservable.pipe(
      switchMap(item => this.infra.getAll()) // s'abonne sur le next du parent
      // concatMap(item => this.infra.getAll())
    )
  }
}
