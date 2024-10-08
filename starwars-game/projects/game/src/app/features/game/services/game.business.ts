import { inject, Injectable } from "@angular/core";
import { catchError, filter, Observable, of, retry, switchMap } from "rxjs";
import { GameDto } from "../../../core/models/game.dto";
import { GetAllGameInfrastructure } from "./game.infrastructure";
import { GameListComponent } from "../game-list/game-list.component";
import { SearchService } from "search-lib";

@Injectable({providedIn: 'root'})
export class GameBusiness {
  private readonly infra = inject(GetAllGameInfrastructure)
  private readonly searchStore = inject(SearchService)
  // private readonly ui = inject(GameListComponent)

  getAll(): Observable<GameDto[]> {
    // Métier de communication entre service et filtres / operators, ..
    return this.searchStore.asObservable.pipe(
      filter(search => search.item !== ''),
      switchMap(search => this.infra.getAll(search.item)),
      filter(items => items.length > 0),
      catchError(err => of(err))
    )
  }
}
