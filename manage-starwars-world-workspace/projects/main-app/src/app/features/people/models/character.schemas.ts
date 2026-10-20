import { minLength, required, schema, validate } from "@angular/forms/signals";
import { CharacterWithoutUrl } from "./character";

export const characterSchema = schema<CharacterWithoutUrl>(ctx => {
  required(ctx.name, { message:'Nom obligatoire'});
  minLength(ctx.name, 3);

  // validate(ctx.name, subCtx => {
  //   const value = subCtx.value();

  //   return {
  //     kind: 'name',
  //     message: 'Name avec deux majuscules'
  //   }

  // })
});
