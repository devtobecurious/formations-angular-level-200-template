import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUpper',
  pure: true
})
export class ToUpperPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    console.info('ToUpper');
    return value.toUpperCase();
  }
}
