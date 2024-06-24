import { effect, inject, Injectable } from "@angular/core";
import { GameService } from "./game.service";
import { SearchService } from "search";
import { concatMap, debounceTime, distinctUntilChanged, filter, Observable, pairwise, switchMap } from "rxjs";
import { GameDto } from "../../../core/models/game.dto";
import { toObservable } from "@angular/core/rxjs-interop";
import { select, Store } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";
import { selectAllGamesSelector, selectAllSuccessGamesSelector } from "../../store/games.selectors";
import { addGameInStoreAction, requestToGetAllGamesFromApiAction as requestToGetAllGamesToApiAction } from "../../store/games.actions";

@Injectable({providedIn: 'root'})
export class GameApplication {
  private readonly infra = inject(GameService)
  private readonly searchStore = inject(SearchService)
  private readonly store = inject(Store<ApplicationState>)

  listenSignalSearch = effect(() => {
    if(this.searchStore.valueToLower() == '') {
      // Afficher popin
    }
  })

  addNewOne(): void {
    const game: GameDto = {
      id: 0,
      success: false,
      title: 'New one'
    }

    // this.store.dispatch(addGameInStoreAction({ game: game }))
    this.store.dispatch(addGameInStoreAction({ game })) // approche optimistic
  }

  initialize(): void {
    this.store.dispatch(requestToGetAllGamesToApiAction());
  }

  getAll(): Observable<GameDto[]> {
    const fromStore$ = this.store.pipe(
      //select(selectAllGamesSelector) // select : operator de ngrx pour exécuter un selector donné
      select(selectAllSuccessGamesSelector)
    )

    return fromStore$

    // return toObservable(this.searchStore.valueToLower)
    //       .pipe(
    //         filter(item => item !== ''),
    //         debounceTime(200), // prend le dernier next durant une période 200 ms
    //         distinctUntilChanged((prev, current) => prev !== current), // garde en cache la dernière valeur émise par le next et n'émet que si contenu du next différent
    //         switchMap(item => fromStore$),
    //         filter(items => items.find(item => item.success) !== null)
    //       )

    // return toObservable(this.searchStore.valueToLower)
    //       .pipe(
    //         filter(item => item !== ''),
    //         debounceTime(200), // prend le dernier next durant une période 200 ms
    //         distinctUntilChanged((prev, current) => prev !== current), // garde en cache la dernière valeur émise par le next et n'émet que si contenu du next différent
    //         switchMap(item => this.infra.getAll(item, 3)),
    //         // filter(items => items.find(item => item.success) !== null)
    //       )
  }
}
