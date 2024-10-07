import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'boolToText',
    standalone: true
})
export class BoolToTextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? "A fond" : "Hélas";
  }

}
