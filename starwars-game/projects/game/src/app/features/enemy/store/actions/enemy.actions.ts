import { createAction, props } from "@ngrx/store";
import { EnemyDTO } from "projects/game/src/app/core/models/enemy.dto";

export enum EnemyActionType {
  RequestFeedList = '[COMPONENT UI] - UPDATE LIST ENEMIES',
  FeedList = '[EFFECT] - UPDATE ENEMIES WITH DATA ',

  AddOneItem = '[COMPONENT UI] - ADD ONE ENEMY'
}

export const demandeRemplissageListEnemiesAction = createAction(EnemyActionType.RequestFeedList);
export const remplissageListEnemiesAction = createAction(EnemyActionType.FeedList, props<{enemies: EnemyDTO[]}>());


export const addOneEnemyAction = createAction(EnemyActionType.AddOneItem);
