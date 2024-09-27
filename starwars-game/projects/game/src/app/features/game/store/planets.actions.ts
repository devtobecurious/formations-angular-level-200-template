import { createAction, props } from "@ngrx/store";
import { Planet } from "./planets.store";

export type AddPlanets = {
  items: Planet[]
}
export const addPlanetsAction = createAction('[BUSINESS] - add list of planets', props<AddPlanets>());
