import { createReducer, on } from "@ngrx/store";
import { Stats } from "../models";
import { erreurVenantApi, miseAjourStateAvecRetourApiPourReducer } from "./actions";

export type EtatChargement = 'draft' | 'loading' | 'loaded' | 'onerror';

// Etape 01 - Déclaration Etat
export interface StatsState {
  items: Stats,
  etatChargement: EtatChargement
}

// Etape 02 - Initialisation
export const etatInitialStats: StatsState = {
  items: [],
  etatChargement: 'draft'
}

// Etape 03 - Création du reducer
export const statsReducer = createReducer(
  etatInitialStats,
  on(miseAjourStateAvecRetourApiPourReducer, (previousState, action) => {
    // Mettre à jour l'état avec une nouvelle version de l'état !! (une nouvelle référence)
    // aka : Immutabilité
    const nouvelEtat: StatsState = {
      etatChargement: "loaded",
      items: action.items
    }

    return nouvelEtat;
  }),
  on(erreurVenantApi, (previousState, action) => {
    const nouvelState: StatsState = {
      etatChargement: 'onerror',
      items: previousState.items
    }

    return nouvelState;
  })
);
