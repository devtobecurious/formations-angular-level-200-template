import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToTxt',
  pure: true
})
export class EnumToTxtPipe implements PipeTransform {

  transform(value: 'EUR' | 'DOLLAR' | 'YEN', ...args: unknown[]): unknown {
    return value.toLowerCase();
  }

}
