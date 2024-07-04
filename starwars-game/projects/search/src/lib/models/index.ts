// 1. Déclaration du type de l'état
export interface SearchState {
  value: string | null
}

// 2. Valeur initiale
export const initialValue: SearchState = {
  value: null
}
