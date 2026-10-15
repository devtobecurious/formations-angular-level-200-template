import { inject, Service, Signal } from '@angular/core';
import { CreatePlanet, Planet } from '../models/planet';
import { PlanetsStore } from './planets.store';

@Service()
export class PlanetsBusiness {
    private readonly store = inject(PlanetsStore);

    add(planet: CreatePlanet): void {
        this.store.dispatch({
            id: this.store.state().length + 1,
            length: planet.length,
            name: planet.name,
            population: planet.population,
            withStormTroopers: planet.withStormTroopers,
            satellite: { ...planet.satellite },
            cities: [...planet.cities]
        });
    }

    getList(): Signal<Planet[]> {
        return this.store.state;
    }
}
