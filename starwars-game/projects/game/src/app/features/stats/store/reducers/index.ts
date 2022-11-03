import { createReducer, on } from "@ngrx/store";
import { Statistic } from "../../models";
import { add2statisticInArrayAction } from "../actions";

export interface StatisticsState {
  items: Statistic[]
}

export const initialState: StatisticsState = {
  items: []
};

export const statsReducer = createReducer(
  initialState,
  on(add2statisticInArrayAction, (state, action) => {
    const items: Statistic[] = [...state.items];

    for (let i = 0; i < action.value; i++) {
      const fakeStatistic: Statistic = {
        month: 1,
        year: 2,
        nbGames: 2
      }

      items.push(fakeStatistic);
    }


    const newVersionOfState: StatisticsState = {
      items: items
    };

    return newVersionOfState;
  })
);
