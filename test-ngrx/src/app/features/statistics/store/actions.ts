import { createAction, props } from "@ngrx/store";
import { Stats } from "../models";

type StatsProps = {
  items: Stats
}


export const demandeDataStatsAApiPourEffect = createAction('[Stats - UI] - Vers effect - Pour requete API');
export const miseAjourStateAvecRetourApiPourReducer = createAction('[Stats - Effect] - Vers Reducer - Update list', props<StatsProps>());
export const erreurVenantApi = createAction('[Stats - Effect] - Vers reducer - Erreur');

