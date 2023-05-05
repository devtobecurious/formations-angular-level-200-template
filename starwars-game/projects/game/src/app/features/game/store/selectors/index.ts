import { createSelector } from '@ngrx/store';
import { AppState } from './../../../../../store/index';
// ETape 1 : à faire une fois par feature module
export const selectState = (app: AppState) => app.games;

// Liste de MES selectors
export const selectAllGames = createSelector(selectState, state => state.items);
export const selectAllGamesSuccess = createSelector(selectAllGames,
  games => games.filter(game => game.success));
