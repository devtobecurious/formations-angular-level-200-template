import {StringOrUndefined} from 'mframe';

export interface SearchState {
  value: StringOrUndefined
}

export const initialSearchState: SearchState = {
  value: ''
}
