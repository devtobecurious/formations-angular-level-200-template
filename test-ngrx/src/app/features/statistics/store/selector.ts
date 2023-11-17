import { createSelector } from "@ngrx/store";
import { ApplicationState } from "src/app/reducers";

// 1. Temps 1 - Je dit quel état m'intéresse
export const preSelectorStatisticsState = (state: ApplicationState) => state.statistics;

// 2. Temps 2 - Je crée mes selectors
export const selectAllStats = createSelector(preSelectorStatisticsState, state => state.items);
export const selectStatsGamesGagnees = createSelector(selectAllStats, items => items.filter(item => item.nbPartiesGagnees > 0));
export const onErrorStatsSelector = createSelector(preSelectorStatisticsState, items => items.etatChargement === 'onerror');
