import { Component, inject, signal } from '@angular/core';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { addPlanetSchema, CreatePlanet, defaultAddPlanet, Planet } from '../../models/planet';
import { PlanetsBusiness } from '../../services/planets.business';
import { Router } from '@angular/router';

@Component({
  imports: [FormField, FormRoot],
  selector: 'app-add-planet',
  styleUrl: './add-planet.css',
  templateUrl: './add-planet.html',
})
export class AddPlanet {
  private readonly planet = signal<CreatePlanet>(defaultAddPlanet);
  protected readonly planetForm = form(this.planet, addPlanetSchema);
  private readonly business = inject(PlanetsBusiness);
  private readonly router = inject(Router);

  saveOne(): void {
    if(this.planetForm().valid()) {
      this.business.add(this.planetForm().value());
      this.router.navigate(['/planets']);
    }
  }
}
