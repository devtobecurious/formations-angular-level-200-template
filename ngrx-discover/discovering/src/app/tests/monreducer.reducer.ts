import { createReducer, on } from '@ngrx/store';
import { MonreducerActions } from './monreducer.actions';

export const monreducerFeatureKey = 'monreducer';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
);

