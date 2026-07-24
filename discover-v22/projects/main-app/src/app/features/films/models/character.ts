export interface Character {
    name: string;
    url: string;
    id: number;
}

export type CharacterFromApi = {
    results: Character[],
    //characters: Character[]
}