import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { PlanetsBusiness } from '../../services/planets.business';
import { RouterLink } from '@angular/router';
import { httpResource } from '@angular/common/http';
import { PlanetsFromApiResult } from '../../models/planet';

@Component({
  imports: [DecimalPipe, RouterLink],
  selector: 'app-display-planets',
  styleUrl: './display-planets.css',
  templateUrl: './display-planets.html',
})
export class DisplayPlanets {
  protected readonly planets = (inject(PlanetsBusiness)).getList();
  // protected readonly resource = httpResource<PlanetsFromApiResult>(() => 'https://swapi.dev/api/planets',
  //                                                                 { 
  //                                                                   defaultValue: {results: []}
  //                                                                 });

}
