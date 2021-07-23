import { createReducer, on } from "@ngrx/store";
import { EnemyDTO } from "projects/game/src/app/core/models/enemy.dto";
import { demandeRemplissageListEnemiesAction, remplissageListEnemiesAction } from "../actions/enemy.actions";

export interface EnemyState {
  items: EnemyDTO[]
}

export const etatInitial: EnemyState = {
  items: []
};

export const enemyReducer = createReducer(
  etatInitial,
  // on(remplissageListEnemiesAction, (state, action) => {
  //   return {
  //     items: action.enemies
  //   }
  // }),

  on(remplissageListEnemiesAction, (state, action) => ({ items: action.enemies }) )
  //
  // Modification sans appel du service
  //on(demandeRemplissageListEnemiesAction, (state, action) => {
  //   const copieTableau = [... state.items];

  //   copieTableau.push({
  //     id: Math.random() * 100,
  //     libelle: 'Test' + Math.random(),
  //     life: 100,
  //     xp: 100
  //   });

  //   copieTableau.push({
  //     id: Math.random() * 100,
  //     libelle: 'Test' + Math.random(),
  //     life: 0,
  //     xp: 100
  //   });


  //   return  {
  //     items: copieTableau
  //   };
  // })
);
