import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUpperCustom',
  pure: true
})
export class ToUpperCustomPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    console.info('ToUpperCustomPipe transform');
    return value.toUpperCase();;
  }

}
