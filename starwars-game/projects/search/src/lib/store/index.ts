
export type Undefined<T> = T | undefined
export type NullOrUndefined<T> = Undefined<T> | null

// type Wookiee = {
//   name: string,
//   surname: string
// }

// type Keys = keyof Wookiee
// const list: Keys = "name"

export interface SearchState {
  item: Undefined<string>
 // item ?: string
}

export const initialValue: SearchState = {
  item: ''
}
