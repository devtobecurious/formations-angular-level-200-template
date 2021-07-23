import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs/operators";
import { EnemyService } from "../../services/enemy.service";
import { demandeRemplissageListEnemiesAction, remplissageListEnemiesAction } from "../actions/enemy.actions";

@Injectable()
export class EnemyEffects {
  constructor(private actions$: Actions, private service: EnemyService) {
  }

  loadEnemies$ = createEffect(() => this.actions$.pipe(
    ofType(demandeRemplissageListEnemiesAction),
    concatMap(action => this.service.getAll()),
    map(enemies => remplissageListEnemiesAction({ enemies: enemies }))
  ));
}
