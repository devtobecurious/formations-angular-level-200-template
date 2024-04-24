import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StatisticsInfrastructure } from "../services/statistics.infrastructure";
import { requestToApiStatsAction, updateStateFromApiStatsAction } from "./statistics.actions";
import { concatMap, map } from "rxjs";

@Injectable()
export class StatsEffectContainer {
  private readonly actions$ = inject(Actions);
  private readonly infra = inject(StatisticsInfrastructure);

  selectAll$ = createEffect(() => this.actions$.pipe(
    ofType(requestToApiStatsAction), // je filtre sur l'action souhaitée
    concatMap(action => this.infra.getAll()), // j'appelle mon api
    map(items => updateStateFromApiStatsAction({ items})) // je renvoie une nouvelle action
  ))
}
