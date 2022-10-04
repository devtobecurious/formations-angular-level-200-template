import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: null
})
export class GridConfigService {
  tailleH2 = new BehaviorSubject<number>(0);

  constructor() { }
}
