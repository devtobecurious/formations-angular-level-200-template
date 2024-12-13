import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";

export const selectAllStatistics = createSelector((state: ApplicationState) => state.statistics,
                                                  state => state.items)

export const isLoadingStatistics = createSelector((state: ApplicationState) => state.statistics,
                                        state => state.isLoading)
