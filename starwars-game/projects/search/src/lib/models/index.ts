// Temps 1 : On crée la structure de l'état
export interface SearchState {
  value: string
}

// Temps 2 : On crée la valeur initiale de mon état
export const searchInitValue: SearchState = {
  value: ''
}
