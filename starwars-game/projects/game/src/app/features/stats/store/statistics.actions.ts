import { createAction, props } from "@ngrx/store";
import { Statistics } from "../models";

export const initStateWithFirstArrayAction = createAction('[UI] - Init state with first array', props<{ statistics: Statistics }>());
