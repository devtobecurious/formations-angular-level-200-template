import { inject } from "@angular/core";
import { GameService } from "./game.service";
import { SearchbisStateService } from "../../../shared/ui/search-bis/searchbis-state.service";
import { Observable, map } from "rxjs";
import { GameDto } from "../../../core/models/game.dto";

export class GameBusiness {
  private infra = inject(GameService);
  private searchStateService = inject(SearchbisStateService);

    getAll(nbItems = 100): Observable<GameDto[]> {
      return this.searchStateService.asObservable.pipe(
        map(searchItem => this.infra.getAll(searchItem.value, nbItems))
      );
    }
}
