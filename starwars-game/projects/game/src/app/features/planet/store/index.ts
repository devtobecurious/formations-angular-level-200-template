import { createReducer, on } from "@ngrx/store";
import { Planet } from "../models";
import { addNewPlanetAction } from "./planet.actions";

// 1. Un état
export interface PlanetState{
  items: Planet[],
  loadedStatus: 'draft' | 'loading' |'loaded' | 'failed'
}

// 2. Une instance par défaut
export const initialPlanetState: PlanetState = {
  items: [],
  loadedStatus: 'draft'
}

// 3. Un reducer
export const planetReducer = createReducer(
  initialPlanetState,
  on(addNewPlanetAction, (state, action) => { // ça veut dire : quand l'action d'ajout est envoyé vers le store, ici, on execute la fonction
    const newItems = [...state.items];
    newItems.push(action.item); // j'ajoute l'item dans la liste

    const newState: PlanetState = {
      items: newItems,
      loadedStatus: 'loaded'
    };

    return newState; // ça va déclencher un next sur mon etat
  })
);
