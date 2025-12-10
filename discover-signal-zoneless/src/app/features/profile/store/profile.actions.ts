import { createAction, props } from "@ngrx/store";
import { Profile } from "../models/profile";

export type ProfileContainer = {
  item: Profile | undefined
}

export const createProfileAction = createAction('[UI] -> create a profile with api', props<ProfileContainer>());
