import { minLength, required, schema } from "@angular/forms/signals";

export interface BigCity {
  id: number;
  name: string;
}

export type NewBigCity = Omit<BigCity, 'id'>

export const bigCitySchema = schema<NewBigCity>(ctx => {
  required(ctx.name);
  minLength(ctx.name, 3);
})
