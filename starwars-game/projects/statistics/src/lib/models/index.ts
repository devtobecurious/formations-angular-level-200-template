export interface Statistic {
  year: number
  month: number
  nbSuccess: number
  nbFailed: number
}

export type ArrayLike<T extends object> = T[]
export type Statistics = ArrayLike<Statistic>
