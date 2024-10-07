// export interface SearchState {
//   item: string // la valeur de mon état à mettre à jour
// }

export type SearchState = {
  item: string
}

export type SearchWithNb = SearchState & {
  nb: number
}

export const initialValue: SearchState = {
  item: ''
}

