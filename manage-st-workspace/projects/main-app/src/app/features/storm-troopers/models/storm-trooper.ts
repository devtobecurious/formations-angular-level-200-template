import { minLength, pattern, required, schema } from "@angular/forms/signals";

export type Color = { r: number; g: number; b: number };

export interface StormTrooper {
    id: number
    matricule: string
    color: string | number | Color
}


export type AddStormTrooper = Omit<StormTrooper, "id">
export const stSchema = schema<AddStormTrooper>(ctx => {
    required(ctx.matricule, { message: 'Matricule obligatoire'});
    minLength(ctx.matricule, 3);
    pattern(ctx.matricule, /[\d\D\w]{3,5}/)
});

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