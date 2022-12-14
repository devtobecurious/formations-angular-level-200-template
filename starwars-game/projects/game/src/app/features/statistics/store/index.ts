import { createReducer, on } from "@ngrx/store";
import { Statistic } from "../service/stats.service";
import { prechargementStatsDeTestsAction } from "./actions";

export interface StatisticsState {
    items: Statistic[]
}

export const statisticsInitialState: StatisticsState = {
    items: []
};

export const statisticsReducer = createReducer(
    statisticsInitialState,

    on(prechargementStatsDeTestsAction, (state, action) => {
        const cloneState: StatisticsState = {
            items: [... state.items]
        };

        for (let index = 0; index < action.nbItems; index++) {
            cloneState.items.push({ year: index + 2000 });
        }

        return cloneState;
    })
);
