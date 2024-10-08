import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayNumber',
  standalone: true,
  pure: true
})
export class DisplayNumberPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    console.info('DisplayNumberPipe')
    return value.toString() + ' !';
  }

}
