import { createAction, props } from "@ngrx/store"
import { Statistic, Statistics } from "../models"

export type AddOrUpdateStat = {
  item: Statistic
}

export const addNewStatAction = createAction('[UI] - add new stat from ui', props<AddOrUpdateStat>());


// Souvent elles sont par trois
export type SelectAllStat = {
  items: Statistics
}

// 1. Demande à l'api
export const requestToApiStatsAction = createAction('[UI] - request api of stats');
// 2. Mise à jour depuis le reducer, après retour de l'api
export const updateStateFromApiStatsAction = createAction('[EFFECT] - update data to reducer, from api', props<SelectAllStat>());
// 3. Traitement des erreurs
