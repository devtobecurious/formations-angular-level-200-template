import { createAction, props } from "@ngrx/store"
import { Species } from "../models/species"

export type WithSpecies = {
  items: Species
}
export const setAllSpeciesAction = createAction('[UI] - Get all species from api', props<WithSpecies>())
