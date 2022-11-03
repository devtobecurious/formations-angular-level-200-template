import { createAction, props } from "@ngrx/store";

export const add2statisticInArrayAction =
  createAction('[UI] - ADD ROWS IN STATE STATISTIQS', props<{ value: number }>());
