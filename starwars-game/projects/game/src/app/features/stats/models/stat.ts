export interface Stat {
  month: number;
  year: number;
  nbSuccess: number;
  nbFailures: number;
  money: number;
}

export type ArrayOf<T extends {id: number} | {}> = T[];
export type Stats = ArrayOf<Stat>;
