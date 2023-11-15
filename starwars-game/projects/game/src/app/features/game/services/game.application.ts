import { Injectable, inject } from "@angular/core";
import { GameInfra } from "./game.infra";
import { Observable, mergeMap } from "rxjs";
import { GameDto } from "../../../core/models/game.dto";
import { SearchStoreService } from "../../../shared/components/search/services";



@Injectable({
  providedIn: 'root'
})
export class GameApplication {
  private adapter = inject(GameInfra);
  private searchStore = inject(SearchStoreService);

  getAll(): Observable<GameDto[]> {
    return this.searchStore.asObservable.pipe(
      mergeMap(result => this.adapter.getAll(3))
    );
  }
}
