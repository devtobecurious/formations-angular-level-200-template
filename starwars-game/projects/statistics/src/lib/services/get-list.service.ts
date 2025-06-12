import { computed, inject, Injectable, signal } from '@angular/core';
import { Stat, StatList } from '../models';
import { GetListRawService } from './get-list-raw.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class GetListService {
  private readonly _store = signal<StatList>([]);
  private readonly rawService = inject(GetListRawService)

  private readonly storeBis = toSignal(this.rawService.getAll())


  add(stat: Stat) {
    this._store.update(list => [... list, stat])
  }

  addAll(...stats: StatList) {
    //stats.forEach(item => this.add(item))
    this._store.update(list => [... list, ...stats])
  }

  get store() {
    return computed(() => this._store());
  }

  get statsWithSuccess() {
    return computed(() => this._store().filter(stat => stat.nbSuccess > 0))
  }
}
