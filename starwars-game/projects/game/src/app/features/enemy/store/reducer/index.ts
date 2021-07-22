import { createReducer, on } from "@ngrx/store";
import { EnemyDTO } from "projects/game/src/app/core/models/enemy.dto";
import { miseAJourListEnemiesAction } from "../actions/enemy.actions";

export interface EnemyState {
  items: EnemyDTO[]
}

export const etatInitial: EnemyState = {
  items: []
};

export const enemyReducer = createReducer(
  etatInitial,
  on(miseAJourListEnemiesAction, (state, action) => {
    const copieTableau = [... state.items];

    copieTableau.push({
      id: Math.random() * 100,
      libelle: 'Test' + Math.random(),
      life: 100,
      xp: 100
    });

    copieTableau.push({
      id: Math.random() * 100,
      libelle: 'Test' + Math.random(),
      life: 0,
      xp: 100
    });


    return  {
      items: copieTableau
    };
  })
);
