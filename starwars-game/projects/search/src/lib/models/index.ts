export type ValueOrUndefined<T> = T | undefined;

export interface SearchState {
  value: ValueOrUndefined<string>;
}

export const initialSearchState: SearchState = {
  value: undefined
}

// la fonction arrow garde toujours le contexte de l'appelant
export const getInitialSearchState = (): SearchState => {
  return initialSearchState;
}


