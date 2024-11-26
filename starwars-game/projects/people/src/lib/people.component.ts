import { AsyncPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { PeopleService } from './people.service';
import { toSignal } from '@angular/core/rxjs-interop'

@Component({
  selector: 'lib-people',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <!-- @let people = peoples$ | async; sans les signaux, et à partir de angular 18.2 -->
    @let people = people$$();

    <h2>{{ title$$() }}</h2>

    <select>
      @for (item of people; track item) {
        <option>{{ item.surname }}</option>
      }
  </select>
  `,
  styles: ``
})
export class PeopleComponent {
  // peoples$ = (inject(PeopleService)).getAll() // Sans les signaux
  people$$ = toSignal((inject(PeopleService)).getAll())
  // title = ''
  initialValue = ''
  title$$ = signal<string>(this.initialValue)

  ngOnInit(): void {
    //this.title = 'Liste des personnes'
    this.title$$.set('Liste des personnes')

  }
}
