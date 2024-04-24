import { createAction, props } from "@ngrx/store"
import { Statistic } from "../models"

export type AddOrUpdateStat = {
  item: Statistic
}

export const addNewStatAction = createAction('[UI] - add new stat from ui', props<AddOrUpdateStat>());
