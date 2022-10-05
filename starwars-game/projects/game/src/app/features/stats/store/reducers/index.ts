import { createReducer, on } from "@ngrx/store";
import { Statistic } from "../../models";
import { commandToPopulateStateOfStatistics, requestToDeleteOneStateCommand, requestToLoadAllStatsInfoCommand } from "../actions";

export interface StatisticsState {
  items: Statistic[]
}

export const initialState: StatisticsState = {
  items: []
};

export const statisticsReducer = createReducer(
  initialState,

  on(requestToDeleteOneStateCommand, (state, action) => {
    const returnItems = [... state.items];

    returnItems.pop();

    const newState: StatisticsState = {
      items: returnItems
    }

    return newState;
  }),

  on(commandToPopulateStateOfStatistics, (state, action) => {
    return {
      items: [... action.items]
    }
  }),

  // on(requestToLoadAllStatsInfoCommand, (state, action) => {

  //   const returnItems = [... state.items];
  //   returnItems.push({ createDate: new Date() }) ;
  //   returnItems.push({ createDate: new Date() }) ;

  //   const newState: StatisticsState = {
  //     items: returnItems
  //   }

  //   return newState;
  // })
);
