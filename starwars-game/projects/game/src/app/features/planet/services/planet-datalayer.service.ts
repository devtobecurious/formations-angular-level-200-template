import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { api } from 'projects/game/src/environments/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetDatalayerService {
  private httpClient = inject(HttpClient);

  getAll(): Observable<{}> {
    return this.httpClient.get<{}>(api.planets.url);
  }
}
