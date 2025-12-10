import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createProfileAction, createProfileConfirmedAction } from "./profile.actions";
import { SaveProfile } from "../services/save-profile";
import { concatMap, map } from "rxjs";

@Injectable()
export class ProfileEffects {
  private readonly actions$ = inject(Actions);
  private readonly saveProfile = inject(SaveProfile);

  createProfile = createEffect(() => this.actions$.pipe(
    ofType(createProfileAction),
    concatMap(action => this.saveProfile.saveOne(action.item!)),
    map(profile => createProfileConfirmedAction({ item: profile })
    )));
}
