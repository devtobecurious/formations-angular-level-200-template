import { inject, linkedSignal, Service, signal, Signal, WritableSignal } from '@angular/core';
import { Planet, Planets } from '../models/planet';
import { GetAllPlanetsInfra } from './get-all-planets.infra';
import { toSignal } from '@angular/core/rxjs-interop';

@Service({autoProvided: false})
export class GetAllPlanetsBusiness {
  private readonly infra = inject(GetAllPlanetsInfra)
  private readonly planetsAsSignal = toSignal(this.infra.getAll())
  private readonly planetsUpdatable = linkedSignal(this.planetsAsSignal)

  getAll(): WritableSignal<Planets>{
    return this.planetsUpdatable;
  }

  addOne(planet: Planet): void {
    this.planetsUpdatable.update(old => [...old ?? [], planet]);
  }

  updateOne(planet: Planet): void {
    this.planetsUpdatable.update(old => [...(old ?? []).filter(item => item.name !== planet.name), planet])
  }
}
