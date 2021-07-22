import { createReducer } from "@ngrx/store";
import { EnemyDTO } from "projects/game/src/app/core/models/enemy.dto";

export interface EnemyState {
  items: EnemyDTO[]
}

export const etatInitial: EnemyState = {
  items: []
};

export const enemyReducer = createReducer(etatInitial);
