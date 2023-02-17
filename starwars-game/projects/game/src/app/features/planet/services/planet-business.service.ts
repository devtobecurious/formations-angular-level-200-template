import { Injectable, inject } from '@angular/core';
import { PlanetDatalayerService } from './planet-datalayer.service';
import { Observable, from, map } from 'rxjs';
import { Planet } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PlanetBusinessService {
  private readonly dataLayer = inject(PlanetDatalayerService);

  getAll(): Observable<Planet[]> {
    return this.dataLayer.getAll().pipe(
      map(result => result.results.map(resultItem => ({ nom: resultItem.name })))
    );
      // map(result => {
      //   let tableau: Planet[] = [];

      //   // for (let index = 0; index < result.results.length; index++) {
      //   //   tableau.push({
      //   //     nom: result.results[index].name
      //   //   })
      //   // }

      //   // tableau = result.results.map(resultItem => {
      //   //   return  {
      //   //     nom: resultItem.name
      //   //   }
      //   // });

      //   // tableau = result.results.map(resultItem => ({ nom: resultItem.name }));


      //   return tableau;
      // })

 }
}
