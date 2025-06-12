import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
  pure: true
})
export class TestPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value + '!';
  }

}
