import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'toYear',
  pure: true
})
export class ToYearPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): number {
    return new Date().getFullYear();
  }
}
