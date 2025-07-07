export interface SearchState {
  item: string,
  error ?: unknown
}

export const initialState: SearchState = {
  item: ''
}
