import { Component, inject } from '@angular/core';
import { GetAllPlanetsBusiness } from '../../services/get-all-planets.business';
@Component({
  imports: [],
  selector: 'app-display-all-planets',
  styleUrl: './display-all-planets.css',
  templateUrl: './display-all-planets.html'
})
export class DisplayAllPlanets {
  private readonly business = inject(GetAllPlanetsBusiness)
  protected readonly data = this.business.getAll()
}
