import { createSelector } from '@ngrx/store';
import { ApplicationState } from '../../../store/application.state';

// 1. Selection de l'état
const getProfileState = (state: ApplicationState) => state.profile;

// 2. LES SELECTORS
export const selectProfileNotEmpty = createSelector(
  getProfileState,
  (profileState) => profileState.item
);

export const selectNameProfile = createSelector(
  selectProfileNotEmpty,
  (profile) => profile?.name.toUpperCase()
);

export const selectProfileLoading = createSelector(
  getProfileState,
  (profileState) => profileState.isLoading
);
