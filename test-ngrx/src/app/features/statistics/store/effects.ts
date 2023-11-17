import { Inject, Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { demandeDataStatsAApiPourEffect, miseAjourStateAvecRetourApiPourReducer } from "./actions";
import { concatMap, map } from "rxjs";
import { StatsApp } from "../services/stats-app";

@Injectable()
export class StatsEffect {
  private readonly actions$ = inject(Actions);
  private readonly business = inject(StatsApp);

  loadStats$ = createEffect(() => this.actions$.pipe(
    ofType(demandeDataStatsAApiPourEffect), // 1: On filtre sur l'action dispatchée qui nous intéresse
    concatMap(action => this.business.getAll()), // 2. Appel api
    map(stats => miseAjourStateAvecRetourApiPourReducer({ items: stats })) // 3. Emission d'une nouvelle action
  ))
}
