import { createAction, props } from "@ngrx/store";
import { PlayerList } from "../models/player";

export type WithData = {
  items: PlayerList
}

export const initWithFakeDataAction = createAction('[UI] - add some fake data', props<WithData>())
