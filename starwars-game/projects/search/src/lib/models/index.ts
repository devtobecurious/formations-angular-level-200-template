export type ValueOrUndefined<T> = T | undefined;

// export class SearchState {
//   value: ValueOrUndefined<string>;
// }

export interface SearchState {
  value: ValueOrUndefined<string>;
}

export const initialSearchState: SearchState = {
  value: undefined
}
