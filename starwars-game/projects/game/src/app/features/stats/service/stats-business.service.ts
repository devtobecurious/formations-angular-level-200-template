import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StatsDatalayerService } from './stats-datalayer.service';



@Injectable({
  providedIn: 'root',
  // useValue: fakeService
})
export class StatsBusinessService {

  constructor(private layer: StatsDatalayerService) { }

  getAll(): Observable<any[]> {
    return this.layer.getAll();
  }
}
