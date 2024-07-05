import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";

const selectState = (state: ApplicationState) => state.statistics;


export const selectAllItemsSelector = createSelector(selectState, state => state.items);
export const selectAllItemsFromCurrentYearSelector = createSelector(selectAllItemsSelector, items => items.filter(item => item.year === (new Date()).getFullYear()))
export const selectAllItemsFromCurrentYearDynamicSelector = (date : Date) =>  createSelector(selectAllItemsSelector, items => items.filter(item => item.year === date.getFullYear()))

export const selectNbItemsSelector = createSelector(selectAllItemsSelector, items => items.length);
