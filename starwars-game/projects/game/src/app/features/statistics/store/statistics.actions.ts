import { createAction, props } from "@ngrx/store";
import { Statistics } from "../models";

export type WithArray = {
  items: Statistics
}


export const requestStatsToApiAction = createAction('[UI] - request to api to get list of stats')
export const addStatsAction = createAction('[UI] - add a fake data array', props<WithArray>())





