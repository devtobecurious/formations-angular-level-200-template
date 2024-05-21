export class SearchItem {
    value = '';
}

export interface SearchItemI {
    value: string;
}

export interface SearchItemPlus extends SearchItemI {
    value2: number;
}

const item = new SearchItem();

const item2: SearchItem = {
    value: 'coucou'
}

const item3: SearchItemI = {
    value: 'oh yeah'
}

type AvecValue = {
    value: string
}

type AvecValuePlus = AvecValue & {
    value2: number
}

function afficherObjet(item: AvecValue): void {
    console.info(item.value);
}

afficherObjet(item)
afficherObjet(item2)
afficherObjet(item3)

function searchItemFactory(): SearchItemI {
    return {value: ''}
}