import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUpperCase',
  standalone: true, // SPAM,
  pure: true
})
export class MyUpperCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    console.info('MyUpperCasePipe')
    //
    return value.toUpperCase()
  }

}
