import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { PlanetsBusiness } from '../../services/planets.business';
import { RouterLink } from '@angular/router';

@Component({
  imports: [DecimalPipe, RouterLink],
  selector: 'app-display-planets',
  styleUrl: './display-planets.css',
  templateUrl: './display-planets.html',
})
export class DisplayPlanets {
  protected readonly planets = (inject(PlanetsBusiness)).getList();
}
