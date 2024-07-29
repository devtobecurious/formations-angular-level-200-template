// 1. Etat
export interface SearchState {
  value: string // | undefined | null
}

// 2. Etat initial
export const searchInitialState: SearchState = {
  value: ''
}
