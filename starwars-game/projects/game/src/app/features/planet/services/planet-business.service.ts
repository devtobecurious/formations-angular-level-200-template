import { Injectable, inject } from '@angular/core';
import { PlanetDatalayerService } from './planet-datalayer.service';

@Injectable({
  providedIn: 'root'
})
export class PlanetBusinessService {
  private readonly dataLayer = inject(PlanetDatalayerService);


}
