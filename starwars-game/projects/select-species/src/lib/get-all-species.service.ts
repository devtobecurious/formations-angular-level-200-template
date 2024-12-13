import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Species } from './models/specie';

@Injectable({
  providedIn: 'root'
})
export class GetAllSpeciesService {
  getAll(): Observable<Species> {
   throw new Error('Not implemented exception')
  }
}
