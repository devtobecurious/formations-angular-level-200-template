import { Component, inject } from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import { PeopleBusiness } from '../services/people.business';

@Component({
  selector: 'lib-people-select',
  standalone: true,
  imports: [],
  template: `
    <select>
      @for (item of people$$(); track item) {
        <option>{{item.name }}
      }
    </select>
  `,
  styles: ``
})
export class PeopleSelectComponent {
  private readonly business = inject(PeopleBusiness);
  people$$ = toSignal(this.business.getAll());
  // people2$$ = toSignal(this.business.getAll());
}
