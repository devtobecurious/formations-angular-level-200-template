import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProfilDto } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProfilBusinessService {

  constructor() { }

  saveOne(profil: ProfilDto): Observable<ProfilDto> {
    return of(profil);
  }
}
