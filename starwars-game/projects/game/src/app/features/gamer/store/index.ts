import { createReducer, on } from "@ngrx/store";
import { Gamer } from "../models/gamer";
import { authGamer } from "./user.actions";

export interface GamerState {
  item: Gamer  | undefined
  isLoading ?: boolean
  error?: unknown
}

const initialValue: GamerState = {
  item: undefined
}

export const gamerReducer = createReducer(
  initialValue,

  on(authGamer, (state, action) => {
    const gamer: Gamer | undefined = state.item ? {...state.item} :  undefined

    const newState: GamerState = {
      item: gamer
    }

    return newState
  })
)
