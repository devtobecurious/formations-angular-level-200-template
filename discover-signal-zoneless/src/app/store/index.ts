import { ActionReducerMap } from "@ngrx/store";
import { ApplicationState } from "./application.state";
import { profileReducer } from "../features/profile/store/profile.reducer";



export const reducers: ActionReducerMap<ApplicationState> = {
  profile: profileReducer
};
