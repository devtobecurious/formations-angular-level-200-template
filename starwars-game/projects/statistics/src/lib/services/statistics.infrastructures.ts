import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Statistics } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'projects/game/src/environments/environment';
import { fakeService } from './mocks';

@Injectable({
  providedIn: 'root',
  //useValue:
  useFactory: () => environment.production ? new GetAllStatisticsInfrastructure()
                                           : fakeService
})
export class GetAllStatisticsInfrastructure {
  private readonly http = inject(HttpClient);

  getAll(): Observable<Statistics> {
    return this.http.get<Statistics>('/api/stats');
  }
}
