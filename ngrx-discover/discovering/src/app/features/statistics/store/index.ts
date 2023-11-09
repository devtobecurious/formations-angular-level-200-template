import { createReducer, on } from "@ngrx/store";
import { Statistics } from "../models";
import { avecErreurMettreAJourStateDepuisRetourApi, mettreAJourStateDepuisRetourApi } from "./actions";

// 1. Créer le state
export interface StatisticsState {
  items: Statistics,
  state: 'not-loaded' | 'loading' | 'loaded' | 'with-error'
}

// 2. Créer un objet qui va représenter l'état initial (au démarrage de ce module)
export const statisticsInitialState: StatisticsState = {
  items: [],
  state: 'not-loaded'
}

// 3. Création du reducer
export const statisticsReducer = createReducer(
  statisticsInitialState,
  on(mettreAJourStateDepuisRetourApi, (state, action) => {
    // ici je vais mettre à jour mon état avant de le renvoyer au store, pour une action donnée
    const newState: StatisticsState = {
      items: action.statistics, // on ne sait pas d'ou elles viennent, mais on sait qu'elles(les stats) sont dans l'action
      state: 'loaded'
    }

    return newState;
  }),
  on(avecErreurMettreAJourStateDepuisRetourApi, (state, action) => {
    const newState: StatisticsState = {
      items: state.items, // on ne sait pas d'ou elles viennent, mais on sait qu'elles(les stats) sont dans l'action
      state: 'with-error'
    }

    return newState;
  })
);
