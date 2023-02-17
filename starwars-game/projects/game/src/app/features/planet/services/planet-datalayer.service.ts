import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { api } from 'projects/game/src/environments/api';
import { environment } from 'projects/game/src/environments/environment';
import { Observable, of } from 'rxjs';

export interface GetAllPlanets {
  getAll(): Observable<{}>;
}

const mock: GetAllPlanets = {
  getAll: () => {
    return of({});
  }
}

export type PlanetResult = {
  name: string
}

export type ApiPlanetResult = {
  results: PlanetResult[]
}


@Injectable({
  providedIn: 'root',
  //useValue: mock
  useFactory: () => ! environment.production ? new PlanetDatalayerService() : mock
})
export class PlanetDatalayerService implements GetAllPlanets {
  private httpClient = inject(HttpClient);

// constructor(private readonly httpClient: HttpClient) {}

  getAll(): Observable<ApiPlanetResult> {
    return this.httpClient.get<ApiPlanetResult>(api.planets.url);
    //throw new Error('PlanetDatalayerService: getAll');
  }
}
