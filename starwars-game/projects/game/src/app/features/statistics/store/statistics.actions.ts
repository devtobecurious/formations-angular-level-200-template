import { createAction, props } from "@ngrx/store";
import { Statistic } from "../models";

export const requestAllStatisticsToApi = createAction('[Business -> Effect] - request to effect')

type WithItemsType = {
  items: Statistic[]
}
export const updateListStatisticsFromApi = createAction('[Effect -> Reducer] - after return of web api, to reducer', props<WithItemsType>())
