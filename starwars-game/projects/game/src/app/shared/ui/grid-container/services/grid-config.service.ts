import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { getDefaultConfiguration, GridConfiguration } from '../models';

export type NoSingleton = null;

@Injectable({
  providedIn: null // pour ne pas être singleton
})
export class GridConfigService {
  store = new BehaviorSubject<GridConfiguration>(getDefaultConfiguration());

  constructor() { }


}
