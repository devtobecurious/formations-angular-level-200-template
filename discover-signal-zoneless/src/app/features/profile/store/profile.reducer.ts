import { createReducer, on } from "@ngrx/store";
import { initialProfileState } from "./profile.state";
import { createProfileAction } from "./profile.actions";

export const profileReducer = createReducer(
  initialProfileState, // first dispatch => update ui one first time
  on(createProfileAction, (lastVersionBeforeUpdateState, action) => {
    const itemToUpdate = action.item;

    let state = { ...lastVersionBeforeUpdateState };
    if (itemToUpdate) {
      state.item = { ...itemToUpdate };
    }

    return state;
  })
)
