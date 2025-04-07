export interface Wookiee {
    name : string;
    age : number;
    isJedi: boolean;
}

export type ItemList<T> =  T[];
export type WookieeList = ItemList<Wookiee>;