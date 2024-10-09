import { createSelector } from "@ngrx/store";
import { ApplicationState } from "projects/game/src/app/reducers";

export const selectAllStats = createSelector((app: ApplicationState) => app.statistics, state => state.items)
