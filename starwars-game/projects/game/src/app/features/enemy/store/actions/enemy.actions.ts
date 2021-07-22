import { createAction } from "@ngrx/store";

export enum EnemyActionType {
  UpdateList = '[COMPONENT UI] - UPDATE LIST ENEMIES',
  AddOneItem = '[COMPONENT UI] - ADD ONE ENEMY'
}

export const miseAJourListEnemiesAction = createAction(EnemyActionType.UpdateList);
export const addOneEnemyAction = createAction(EnemyActionType.AddOneItem);
