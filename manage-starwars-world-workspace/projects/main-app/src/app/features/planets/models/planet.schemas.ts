import { apply, applyEach, min, required, schema, validate } from "@angular/forms/signals";
import { Coordinate, Planet } from "./planet";
import { bigCitySchema } from "./big-city";

export const coordinateSchema = schema<Coordinate>(ctx => {
  validate(ctx.x, (subCtx) => {
    const x = subCtx.value()
    const y = subCtx.valueOf(ctx.y)
    const z = subCtx.valueOf(ctx.z)

    if(x == 0 && y === 0 && z === 0 ) {
      return {
        kind: 'coordinate',
        message: 'La planète est inconnue'
      }
    }

    return null;
  })
})

export const planetSchema = schema<Planet>(ctx => {
  required(ctx.name)
  min(ctx.diameter, 1000)
  required(ctx.climate, {message: 'Climat non vide'})

  apply(ctx.coordinate, coordinateSchema);
  applyEach(ctx.cities, bigCitySchema);
})
