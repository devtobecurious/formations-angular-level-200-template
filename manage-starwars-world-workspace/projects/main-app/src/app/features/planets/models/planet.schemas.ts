import { min, required, schema } from "@angular/forms/signals";
import { Planet } from "./planet";

export const planetSchema = schema<Planet>(ctx => {
  required(ctx.name)
  min(ctx.diameter, 1000)
  required(ctx.climate, {message: 'Climat non vide'})
})
