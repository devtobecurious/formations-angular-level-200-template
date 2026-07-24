export interface Character {
    id: number;
    url: string
}

export type FilmsFromApi = {
    count: number;
    results: Film[],
    //characters: Character[]
}

export interface Film {
    episode_id: number;
    title: string;
    characters: string[];
}