import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map } from "rxjs/operators";
import { StatisticDataService } from "../../services/statistic-data.service";
import { getResultStatsFromApi, onGetStatsFromApiError, requestToLoadToApi } from "../actions";

@Injectable()
export class StatsEffect {
  constructor(private actions$: Actions, private service: StatisticDataService) {}

  getAll$ = createEffect( () => this.actions$.pipe(
      ofType( requestToLoadToApi ), // je filtre sur l'action qui m'intéresse
      concatMap(action => this.service.getList()), // je passe de mon action au résultat de l'appel à l'api
      // catchError(error => onGetStatsFromApiError()),
      map(stats => getResultStatsFromApi({ statistics: stats })) // on génère l'action, sera récupérée par le reducer
    )
  );
}
