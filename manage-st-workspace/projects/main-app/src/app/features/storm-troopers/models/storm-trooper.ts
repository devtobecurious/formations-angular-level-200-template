export type Color = { r: number; g: number; b: number };

export interface StormTrooper {
    id: number
    matricule: string
    color: string | number | Color
}

// const st = {
//     id: 1,
//     matricule: '',
//     color: { r: 1, b: 1, g: 1}
// } satisfies StormTrooper;


// const color: { r: number; g: number; b: number } = {
//     b: 0,
//     g: 0,
//     r: 0
// }