import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";

export const selectState = (app: ApplicationState) => app.planets;
export const selectAllPlanets = createSelector(selectState, state => state.items);
export const selectAllPlanetsWithSurfaceWater = createSelector(selectAllPlanets, items => items.filter(item => item.surface_water > 5));
