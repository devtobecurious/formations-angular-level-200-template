import { inject, Service, Signal } from '@angular/core';
import { CreatePlanet, Planet } from '../models/planet';
import { PlanetsStore } from './planets.store';
import { GetListPlanetsFromApi } from './get-list-planets-from-api';

@Service()
export class PlanetsBusiness {
    // private readonly store = inject(PlanetsStore);
    private readonly fromApiService = inject(GetListPlanetsFromApi);

    add(planet: CreatePlanet): void {
        this.fromApiService.add({
            id: 1,
            length: planet.length,
            name: planet.name,
            population: planet.population,
            withStormTroopers: planet.withStormTroopers,
            satellite: { ...planet.satellite },
            cities: [...planet.cities]
        });
    }

    getList(): Signal<Planet[] | undefined> {
        return this.fromApiService.getList();
    }
}
