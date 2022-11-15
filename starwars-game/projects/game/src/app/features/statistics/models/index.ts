export interface WithGame {
  nbGames: number;
}

/**
 *
 */
 export class Statistic {
  month !: number;
  year !: number;
  nbGames !: number;

  /**
   *
   */
  constructor() {
  }

  // display(): void {}

  // get oneMonth(): number {
  //   return this.month;
  // }
}

/**
 *
 */
export interface StatisticI extends WithGame {
  month: number;
  year: number;
}

// function afficherUneStat(stat: { month: number, year: number, nbGames: number }) {
//   console.info(stat);
// }

export type StatT = {
  month: number,
  year: number,
  nbGames: number,
  // maFonction: () => {
  // }
}

export type StatA = {
  nbLoose: number
} & StatT;

export type StringNumberNull = string | number | null;

export type AliasT = StringNumberNull;
export type ListStat = Statistic[];

function checkType(value: StringNumberNull): void {
  if (typeof(value) == 'string') { // type guard
    const result = value.toLocaleLowerCase();
  } else {
    // attention ici, on ne sait pas encore si number ou null
  }
}


const monA: StatA = {
  month: 1,
  year: 2022,
  nbGames: 2,
  nbLoose: 0
};

function afficherUneStat(stat: StatT) {
  console.info(stat.month, stat.nbGames, stat.year);
}

const statInterface: StatisticI = {
  month: 1,
  year: 2022,
  nbGames: 2
};
afficherUneStat(statInterface);

afficherUneStat(monA);

const statC: Statistic = {
  nbGames: 1,
  month: 1,
  year: 2022
}

const statA = {
  nbGames: 1,
  month: 1,
  year: 2022
}

afficherUneStat(statC);
afficherUneStat(statA);


