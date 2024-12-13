import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GetAllStatisticsService } from "../services/get-all-statistics.service";
import { addStatsAction, requestStatsToApiAction } from "./statistics.actions";
import { concatMap, map } from "rxjs";

@Injectable()
export class StatisticsEffect {
  private readonly actions$ = inject(Actions)
  private service = inject(GetAllStatisticsService)

  loadStats$ = createEffect(() => this.actions$.pipe(
    ofType(requestStatsToApiAction), // Etape 1 : je filtre l'action qui m'intéresse
    concatMap(action => this.service.getAll()), // Etape 2 : je requête mon api
    map(items => addStatsAction({items: items})), // Etape 3 : je dispatch une action avec les items venant de la web api
  ))
}
