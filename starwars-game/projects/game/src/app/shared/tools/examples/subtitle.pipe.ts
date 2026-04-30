import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subtitle',
  pure: true
})
export class SubtitlePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value + ' - A simple game built with Angular';
  }

}
