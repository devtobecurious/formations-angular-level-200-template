import { effect, inject, Injectable, untracked } from "@angular/core";
import { SearchStateService } from "search";
import { GameService } from "./game.service";
import { mergeMap, Observable } from "rxjs";
import { GameDto } from "../../../core/models/game.dto";
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class GameApplication {
  private readonly searchStore = inject(SearchStateService);
  private readonly infra = inject(GameService);

  // searchEffect = effect(() => {
  //   const filter = this.searchStore.asValue(); // Ici on s'abonne sur le signal, et on re exécute cette fonction
  //   this.infra.getAll(filter); // ... to be continued :D
  //   // car ici, je ne peux pas renvoyer mon observable

  //   // on peut lire sans s'abonner
  //   const filterSansAbonnement = untracked(this.searchStore.asValue)
  // })

  getAll(): Observable<GameDto[]> {
    const queryAsObservable$ = toObservable(this.searchStore.asValue);

    return queryAsObservable$.pipe(
      mergeMap(filter => this.infra.getAll(filter))
    )
   }

}
