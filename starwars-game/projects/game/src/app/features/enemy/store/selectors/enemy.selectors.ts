import { createSelector } from "@ngrx/store";
import { ApplicationState } from "projects/game/src/app/reducers";

const selectionState = (state: ApplicationState) => state.enemies;

export const selectAllEnemies = createSelector(selectionState, state => state.items);
export const selectEnemiesALive = createSelector(selectAllEnemies, items => items.filter(item => item.life > 0));
