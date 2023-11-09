import { createSelector } from "@ngrx/store";
import { ApplicationState } from "src/app/reducers";

// 1. Quel état m'intéresse ?
export const recupererEtat = (state: ApplicationState) => state.statistics;

// 2. A partir de cet état, quelles données m'intéressent (selectors)
export const recupererToutesLesStatsSelector = createSelector(recupererEtat, state => state.items);

export const recupererStatsAnneeEnCours = createSelector(recupererToutesLesStatsSelector, items => items.filter(item => item.annee === (new Date()).getFullYear()));

export const recupererEtatEnProbleme = createSelector(recupererEtat, state => state.state != 'loaded');

export const recupererStatutErreur = createSelector(recupererEtat, state => state.state == 'with-error');
