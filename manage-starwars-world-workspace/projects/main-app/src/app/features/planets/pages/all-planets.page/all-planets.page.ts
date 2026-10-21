import { Component } from '@angular/core';
import { DisplayAllPlanets } from '../../components/display-all-planets/display-all-planets';
import { AddPlanet } from '../../components/add-planet/add-planet';
import { GetAllPlanetsInfra } from '../../services/get-all-planets.infra';
import { GetAllPlanetsBusiness } from '../../services/get-all-planets.business';

@Component({
  imports: [DisplayAllPlanets, AddPlanet],
  selector: 'app-all-planets.page',
  styleUrl: './all-planets.page.css',
  templateUrl: './all-planets.page.html',
   providers: [
    GetAllPlanetsInfra,
    GetAllPlanetsBusiness
  ]
})
export class AllPlanetsPage {}
