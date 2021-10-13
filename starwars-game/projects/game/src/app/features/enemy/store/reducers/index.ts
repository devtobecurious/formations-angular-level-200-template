import { createReducer, on } from "@ngrx/store";
import { EnemyDto } from "projects/game/src/app/core/models/enemy";
import { addRandomEnemyAction } from "../actions/enemies.actions";

export interface EnemyState {
  items: EnemyDto[]
}

export const defaultState: EnemyState = {
  items: [
    {
      eyeColor: 'red',
      id: 1,
      name: 'asoka'
    }
  ]
};

export const reducer = createReducer(
  defaultState,
  on(addRandomEnemyAction, (state, action) => {
    const newArray = [...state.items];

    const newRandomEnemy: EnemyDto = {
      eyeColor: 'orange',
      id: Math.random() * 100,
      name: 'enemy' + Math.random() * 10
    };
    newArray.push(newRandomEnemy);

    return {
      items: newArray
    };
  })
);
