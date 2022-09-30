import { createAction, props } from "@ngrx/store";
import { Stat } from "../../models";

export const fakeLoadAction = createAction('[UI] - LOAD FAKE ACTIONS');


export type CallBackStatType = { statistics: Stat[]  };

export const requestToLoadToApi = createAction('[UI] - LOAD ACTION');
export const getResultStatsFromApi = createAction('[EFFECT] - GET STATS FROM API', props<CallBackStatType>());
export const onGetStatsFromApiError = createAction('[EFFECT] - ERROR FROM API');
