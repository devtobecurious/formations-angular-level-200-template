import { Component, inject, signal } from '@angular/core';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { Planet } from '../../models/planet';
import { GetAllPlanetsBusiness } from '../../services/get-all-planets.business';
import { planetSchema } from '../../models/planet.schemas';

@Component({
  imports: [FormRoot, FormField],
  selector: 'app-add-planet',
  styleUrl: './add-planet.css',
  templateUrl: './add-planet.html',
})
export class AddPlanet {
  private readonly business =  inject(GetAllPlanetsBusiness)

  private readonly planet = signal<Planet>({climate: '', diameter: 0, name: ''})
  protected readonly planetForm = form(this.planet, planetSchema)


  save(): void {
    // this.business.addOne(this.planet())
    if(this.planetForm().valid()) {
      this.business.addOne(this.planetForm().value())
    }
  }
}
