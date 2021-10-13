import { createReducer } from "@ngrx/store";
import { EnemyDto } from "projects/game/src/app/core/models/enemy";

export interface EnemyState {
  items: EnemyDto[]
}

export const defaultState: EnemyState = {
  items: []
};

export const reducer = createReducer(defaultState);
