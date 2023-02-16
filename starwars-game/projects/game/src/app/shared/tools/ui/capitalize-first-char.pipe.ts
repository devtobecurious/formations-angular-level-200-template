import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstChar',
  pure: true,
  standalone: true // SPAM
})
export class CapitalizeFirstCharPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof(value) == 'string') { // type guard
      return value.charAt(0).toUpperCase() + value.slice(1);
    }

    return null;
  }

}
