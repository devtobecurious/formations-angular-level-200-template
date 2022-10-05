import { createAction, props } from "@ngrx/store";
import { Statistic } from "../../models";

export const requestToLoadAllStatsInfoCommand = createAction('[UI] - Request to load statistics');
export const commandToPopulateStateOfStatistics = createAction('[EFFECT] - Request to update statistics', props<{ items: Statistic[] }>());
export const errorWhenGettindDataFromStatisticsApi = createAction('[EFFECT] - Error to gets statistics');

export const requestToDeleteOneStateCommand = createAction('[UI] - Delete one state');
