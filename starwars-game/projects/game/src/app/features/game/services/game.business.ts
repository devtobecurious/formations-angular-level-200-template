import { inject, Injectable } from "@angular/core";
import { debounceTime, distinctUntilChanged, filter, Observable, switchMap } from "rxjs";
import { GameDto } from "../../../core/models/game.dto";
import { SearchBarService } from "search-bar";
import { GameService } from "./game.service";

@Injectable()
export class GameBusiness {
  private readonly searchBarService = inject(SearchBarService);
  private readonly gameService = inject(GameService);

  private readonly games$ = this.searchBarService.asObservable.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    filter(search => !!search && search.query.length >= 2),
    switchMap(search => this.gameService.getAll(search!.query, 3))
  );

  getAll(): Observable<GameDto[]> {
    return this.games$;
    // return this.searchBarService.asObservable.pipe(
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   filter(search => !!search && search.query.length >= 2),
    //   switchMap(search => this.gameService.getAll(search!.query, 3))
    // )
  }
}
