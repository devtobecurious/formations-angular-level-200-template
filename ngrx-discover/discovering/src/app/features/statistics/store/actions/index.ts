import { createAction, props } from "@ngrx/store";
import { Statistics } from "../../models";

export const demandePourRecupererLesStatsDepuisApiAction = createAction('[UI -> VERS EFFECT] - Get all stats');

// C'est celle qui va nous fournir les données venant de l'api
export type RetourApiStats = {
  statistics: Statistics
}
export const mettreAJourStateDepuisRetourApi = createAction('[EFFECT - REDUCER] - Update stats state', props<RetourApiStats>());


export const avecErreurMettreAJourStateDepuisRetourApi = createAction('[EFFECT - REDUCER] - ERREUR API');
