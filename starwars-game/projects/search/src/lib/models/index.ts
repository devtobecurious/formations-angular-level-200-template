export type TypeOrUndefined<T> = T | undefined;
export type StringOrUndefined = TypeOrUndefined<string>;

/**
 * nkxfdkgdfkjgbf
 */
export interface SearchState {
  value: StringOrUndefined;
}

export const initialState: SearchState = {
  value: ''
};
