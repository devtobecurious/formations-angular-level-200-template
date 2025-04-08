import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { StatsInfrastructure } from './stats.infrastructure';

@Injectable()
export class StatsBusiness {
  private readonly infra = inject(StatsInfrastructure)
  private readonly statsSignal = toSignal(this.infra.getAll())

  get years() {
    return computed(() => [... new Set(this.stats()?.map(item => item.year.toString()))])
  }

  get successesByYear() {
    return computed(() => {
      const stats = this.statsSignal()
      const values: Record<number, number> = {}

      stats?.forEach(stat => {
        if(! values[stat.year]) {
          values[stat.year] = 0
        }
        values[stat.year] += stat.nbSuccess
      })

      return Object.values(values)
    })
  }

  get stats() {
    return this.statsSignal
  }
}
