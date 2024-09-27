import { createReducer, on } from "@ngrx/store";
import { addPlanetsAction } from "./planets.actions";

export interface Planet {
  name: string;
  surface_water: number;
}

export interface Planets {
  results: Planet[]
}

export interface PlanetsState {
  items: Planet[]
}

const initialValue: PlanetsState = {
  items: []
};

export const planetsReducer = createReducer(
  initialValue,
  on(addPlanetsAction, (state, action) => {
    const newState = {...state};

    action.items.forEach(item => {
      newState.items.push({...item});
    })

    return newState;
  })
);
