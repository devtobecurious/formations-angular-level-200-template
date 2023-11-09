import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StatsBusiness } from "../../services/stats.business";
import { OnError, avecErreurMettreAJourStateDepuisRetourApi, demandePourRecupererLesStatsDepuisApiAction, mettreAJourStateDepuisRetourApi } from "../actions";
import { catchError, concatMap, map, of } from "rxjs";

export class StatisticsEffect {
  private readonly actions$ = inject(Actions);
  private readonly business = inject(StatsBusiness);

  onGetAll$ = createEffect(() => this.actions$.pipe(
    ofType(demandePourRecupererLesStatsDepuisApiAction), // Etape 1: je détecte le dispatch sur cette action, depuis le store
    concatMap(action => this.business.getAll()), // Etape 2 : j'appelle l'api
    map(items => mettreAJourStateDepuisRetourApi({ statistics: items })), // Etape 3 : je transforme mes données en une action avec ces données
    catchError(error => {
      const onError: OnError = {
        error: error
      };
      return of(avecErreurMettreAJourStateDepuisRetourApi(onError));
    }))
  )
}
