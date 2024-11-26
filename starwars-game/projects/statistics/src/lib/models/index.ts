export interface Statistic {
  year: number
  month: number
  nbSuccess: number
  nbFailed: number
}

// extends {id: number}
export type Items<T> = T[]
export type Statistics = Items<Statistic>
