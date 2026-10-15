export interface Rebel {
    id: number;
    name: string;
    height: number;
    url: string;
}

export type FromApiResult = {
    results: Rebel[]
}