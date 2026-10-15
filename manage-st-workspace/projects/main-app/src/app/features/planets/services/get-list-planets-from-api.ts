import { httpResource } from '@angular/common/http';
import { computed, Service, Signal } from '@angular/core';
import { Planet, PlanetsFromApiResult } from '../models/planet';

@Service()
export class GetListPlanetsFromApi {
    private readonly resource = httpResource<PlanetsFromApiResult>(() => 'https://swapi.dev/api/planets?filter=100');
    private readonly items = computed(() => {
        const planetsResultFromApi = this.resource.value();
        return planetsResultFromApi?.results;
    })

    add(planet: Planet): void {
        this.resource.update(old => {
            let newResult: PlanetsFromApiResult | undefined = old;

            if(old?.results) {
                newResult = {
                    results: [...old.results, planet]
                };
            }

            return newResult;
        })
    }

    get asResource() {
        return this.resource;
    }

    getList(): Signal<Planet[] | undefined> {
        return this.items;
    }
}
