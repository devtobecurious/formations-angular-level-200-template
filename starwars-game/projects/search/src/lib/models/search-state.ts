// 1. def de l'état
export interface SearchState {
  item: string | undefined
  isLoading?: boolean
  error ?: unknown
}

// 2. définition d'une valeur initiale
export const searchInitValue: SearchState = {
  item: ''
}
