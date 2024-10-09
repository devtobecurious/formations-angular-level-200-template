import { createAction, createActionGroup, props } from "@ngrx/store";
import { Statistics } from "../models";

// export const addListStatsAction = createActionGroup()
type WithItems = {
  items: Statistics
}
export const addStatListAction = createAction('[UI] - Add list of stats', props<WithItems>())
