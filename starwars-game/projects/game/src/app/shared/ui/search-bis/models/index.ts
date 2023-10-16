{
  value: ""
}

// export class SearchItem {
//   value !: string;
// }

// export interface SearchItem {
//   value: string;


// }

export type SearchItem = {
  value: string;
}

export type SearchItemAmeliore = SearchItem & {
  nbItem: number
}

export type StringOrNullable = string | null;

export type SearchItemList = SearchItem[];

export type Test = keyof SearchItemAmeliore;

export type WithValue = { value: string };
export type WithNumber = { value: number };

export type WithValueOrNumber = WithValue | WithNumber;

function AfficherRechercher(search: WithValueOrNumber) {
  if ('value' in search) {
    console.log(search.value);
  }

  const valueBis = {...search}
}

