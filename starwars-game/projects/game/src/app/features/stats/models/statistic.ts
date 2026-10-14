export interface Statistic {
    year: number
    month: number
    nbSuccess: number
    nbFailure: number
}

export type Items<T extends {}> = T[] | undefined;
export type Statistics = Items<Statistic>;