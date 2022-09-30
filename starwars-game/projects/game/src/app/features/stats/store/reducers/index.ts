import { createReducer, on } from "@ngrx/store";
import { Stat } from "../../models";
import { fakeLoadAction, getResultStatsFromApi } from "../actions";

export interface StatisticsState {
  items: Stat[]
}


export const initStats: StatisticsState = {
  items: []
};


export const statReducer = createReducer(
  initStats,

  on(getResultStatsFromApi, (state, action) => {
    const stateReturn = {
      items: [... action.statistics]
    }

    return stateReturn;
  }),

  on(fakeLoadAction, (state, action) => {
    const items = [...state.items];

    items.push({
      dateGame: new Date(),
      titre: 'test jeu 1',
      value: 10
    });

    return {
      items: items
    };
  })
);
