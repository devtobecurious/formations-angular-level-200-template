import { TestBed } from '@angular/core/testing';
import { GetAllPlanetsBusiness } from './get-all-planets.business';
import { GetAllPlanetsInfra } from './get-all-planets.infra';
import { of } from 'rxjs';
import { Planet } from '../models/planet';

const planets: Planet[] = [
  {}, {}, {}
]

describe('GetAllPlanetsBusiness', () => {
  let service: GetAllPlanetsBusiness;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: GetAllPlanetsInfra, useValue:  { getAll() { return of(planets)} }},
        GetAllPlanetsBusiness
      ]
    });
    service = TestBed.inject(GetAllPlanetsBusiness);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it.only('should get 3 planets', () => {
    const planets = service.getAll()();

    expect(planets).toBeTruthy();
    expect(planets?.length).toBe(3);
  })
});
