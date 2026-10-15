import { apply, applyEach, applyWhen, min, required, schema, validate } from "@angular/forms/signals"


export interface Satellite {
    id: number
    name: string
}

export const satelliteSchema = schema<Satellite>(ctx => {
    required(ctx.name);
});

export interface Planet {
    id: number
    name: string
    length: number
    population: number
    withStormTroopers: boolean,
    satellite: Satellite,
    cities: City[]
}

export type PlanetsFromApiResult = {
    results: Planet[]
}

export interface City {
    id: number;
    label: string;
}
export const citySchema = schema<City>(ctx => {
    required(ctx.label, { message: 'Ville obligatoire' })
});

export type CreatePlanet = Omit<Planet, 'id'>;
export const defaultAddPlanet: CreatePlanet = {
    length: 0, 
    name: '', 
    population: 0, 
    withStormTroopers: false,
    satellite: { id: 0, name: ''},
    cities: []
}

export const addPlanetSchema = schema<CreatePlanet>(ctx => {
    required(ctx.name);
    min(ctx.population, 101);
    min(ctx.population, 0);

    apply(ctx.satellite, satelliteSchema);
    applyEach(ctx.cities, citySchema);
    // validate(ctx.population, subCtx => {
        
    // })
});