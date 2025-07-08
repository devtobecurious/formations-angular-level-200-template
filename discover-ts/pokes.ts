export type Pokemon = {
    name: string;
    level: number;
}

export type PokeType = {
    type: 'electric' | 'fire' | 'water' | 'grass' | 'poison' | 'flying' | 'fighting' | 'psychic' | 'bug' | 'rock' | 'ghost' | 'ice' | 'dragon' | 'dark' | 'steel' | 'fairy';
}

export type Poke = Pokemon & PokeType;
const pikachu: Poke = {
    name: 'Pikachu',
    level: 10,
    type: "electric"
}
