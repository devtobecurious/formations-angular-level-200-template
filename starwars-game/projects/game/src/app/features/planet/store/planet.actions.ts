import { createAction, props } from "@ngrx/store";
import { Planet } from "../models";

export type PlanetProp = {
  item: Planet
}
export const addNewPlanetAction = createAction('[UI] - add planet', props<PlanetProp>());
