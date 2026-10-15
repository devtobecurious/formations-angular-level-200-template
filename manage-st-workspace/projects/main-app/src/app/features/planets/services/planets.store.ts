import { Service, signal } from '@angular/core';
import { Planet } from '../models/planet';

@Service()
export class PlanetsStore {
    private readonly store = signal<Planet[]>([]);

    dispatch(planet: Planet): void {
        this.store.update(old => [...old, planet]);
    }

    get state() {
        return this.store.asReadonly();
    }
}
