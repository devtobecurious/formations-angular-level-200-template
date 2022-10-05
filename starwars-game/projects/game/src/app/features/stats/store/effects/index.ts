import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs/operators";
import { StatsDatalayerService } from "../../service/stats-datalayer.service";
import { commandToPopulateStateOfStatistics, requestToLoadAllStatsInfoCommand } from "../actions";

@Injectable()
export class StatisticsToApiEffect {
  constructor(private actions$: Actions, private service: StatsDatalayerService) {}

  loadStatistics$ = createEffect(() => this.actions$.pipe(
    ofType(requestToLoadAllStatsInfoCommand), // je filtre sur la commande qui m'intéresse
    concatMap(action => this.service.getAll()), // je passe de l'action à renvoyer non plus l'action mais le résultat de mon api
    map(resultFromApi => commandToPopulateStateOfStatistics( { items: resultFromApi } )) // on va construire, gtâce à nos statistics venant de l'api, la nouvelle action qui sera "lue" par notre reducer
  ));
}
