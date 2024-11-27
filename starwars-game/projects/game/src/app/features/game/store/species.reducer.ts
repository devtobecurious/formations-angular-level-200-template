import { createReducer, on } from "@ngrx/store";
import { Species } from "../models/species";
import { setAllSpeciesAction } from "./species.actions";

export interface SpeciesState {
  items: Species
}

export const speciesInitValue: SpeciesState = {
  items: []
}

export const speciesToGamesReducer = createReducer(
  speciesInitValue,

  on(setAllSpeciesAction, (oldState, action) => {
    const newState: SpeciesState = {
      items: [...action.items]
    }
    return newState
  })
)
