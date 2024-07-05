import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StatisticsInfrastructure } from "../services/statistics.infrastructure";
import { requestAllStatisticsToApi, updateListStatisticsFromApi } from "./statistics.actions";
import { concatMap, map } from "rxjs";

@Injectable()
export class StatisticsEffects {
  private readonly actions$ = inject(Actions);
  private readonly infra = inject(StatisticsInfrastructure);

  loadAll$ = createEffect(() => this.actions$.pipe(
    ofType(requestAllStatisticsToApi),
    concatMap(action => this.infra.getAll()),
    map(items => updateListStatisticsFromApi({ items }))
  ));
}
