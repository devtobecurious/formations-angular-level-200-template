import { createSelector } from "@ngrx/store";
import { ApplicationState } from "projects/game/src/app/reducers";

const defaultState = (state: ApplicationState) => state.enemies;

export const selectAllEnemies = createSelector(defaultState, state => state.items);
export const selectGreenEyesEnemies = createSelector(selectAllEnemies, items => items.filter(item => item.eyeColor == 'green'));
export const selectRedEyesEnemies = createSelector(defaultState, state => state.items.filter(item => item.eyeColor == 'red'));
