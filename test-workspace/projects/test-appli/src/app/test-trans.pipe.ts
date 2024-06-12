import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testTrans',
  standalone: true,
  pure: true // met en cache si c'est vraiment pure : à utiliser avec une grande responsabilité
})
export class TestTransPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(typeof(value) === 'string') {
      return value.toLowerCase();
    }
    return null;
  }

}
