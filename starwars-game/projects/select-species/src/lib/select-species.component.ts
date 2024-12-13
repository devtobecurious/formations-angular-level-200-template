import { Component, computed, inject, OnInit, signal, Signal } from '@angular/core';
import { Species } from './models/specie';
import { GetAllSpeciesService } from './get-all-species.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'lib-select-species',
  imports: [],
  template: `
    @let list = labels$$();

    <table>
      <tbody>
        @for (item of list; track item) {
          <tr></tr>
        }
      </tbody>
    </table>
  `,
  styles: ``
})
export class SelectSpeciesComponent {
  private readonly service = inject(GetAllSpeciesService)
  // items = signal<Species>([])
  private readonly items$$ = toSignal(this.service.getAll())
  labels$$ = computed(() => this.items$$()?.map(item => item.label.toUpperCase()))
  // labelss = this.items$$()?.map(item => item.label.toUpperCase())

  // ngOnInit(): void {
  //   // this.items.set([
  //   //   { id: 1, label: 'Human' },
  //   //   { id: 2, label: 'Droid' }
  //   // ])
  // }
}
