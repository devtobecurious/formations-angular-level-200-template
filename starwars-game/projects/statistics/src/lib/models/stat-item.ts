export interface StatItem {
  year: number;
  month: number;
  nbSuccess: number;
  nbFail: number;
}

export type StatItemList = StatItem[];