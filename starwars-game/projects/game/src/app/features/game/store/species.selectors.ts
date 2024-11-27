import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";

export const getAllSpecies = createSelector((state: ApplicationState) => state.speciesToGames, state => state.items)

export const getAllSpeciesNotEmpty = createSelector(getAllSpecies, items => items.filter(item => item.label !== ''))
