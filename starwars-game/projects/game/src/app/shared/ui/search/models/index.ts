export type SearchItem = {
    value: string
}

export type AliasSearch = SearchItem;

export type SuperSearch = {
    nbCharacter: number
} & SearchItem;


export interface SearchItemI {
    value: string
}

export interface SearchItemIPlus extends SearchItemI {
    nbCharacter: number
}

export class SearchItemC {
    value !: string;
}

const search = new SearchItemC();
const searchC: SearchItemC = {
    value: ''
};

const searchC1 = {
    value: ''
};

function afficher(search: SearchItemC): void {
    console.info(search.value);
}

afficher(search);
afficher(searchC);
afficher(searchC1);
