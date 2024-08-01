import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { Friend, Friends } from "../models";
import { computed, inject } from "@angular/core";
import { GetAllFriendsInfra } from "../services/get-all-friends.infra";
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from "rxjs";
import { tapResponse } from "@ngrx/operators";

// 1. Etat
export interface FriendsState {
  items: Friends,
  isLoading: boolean,
  error?: unknown
}

// 2. Initial
const initialState: FriendsState = {
  isLoading: false,
  items: []
}

// 3. Store / reducers
export const FriendsStore = signalStore(
  { providedIn: 'root'},
  withState(initialState),
  withComputed(store => ({
    isInError: computed(() => store.error),
    //isInLoading: computed(() => store.)
  })),
  withMethods((store, getAllInfra = inject(GetAllFriendsInfra)) => ({
    addOne(friend: Friend): void {
      const items = store.items()
      items.push(friend)
      patchState(store, { items })
    },
    // addFriend: rxMethod<friend>(
    //   pipe(
    //     tap({ next: () => patchState(store, { items: items[0].friends }) })
    //   )
    // ),
    init: rxMethod<{ filter: string}>(
      pipe(
        tap({ next: () => patchState(store, { isLoading: true }) }),
        switchMap(() => getAllInfra.getAll().pipe(
          tapResponse({
            next: items => patchState(store, {isLoading: false, items: items}),
            error: err => patchState(store, {isLoading: false, error: err})
          })
        ))
      )
    )
  })),
  withHooks({
    onInit(store) {
      store.init({ filter: ''})
    }
  })
)
