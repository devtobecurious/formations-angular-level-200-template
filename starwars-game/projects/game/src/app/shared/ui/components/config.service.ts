import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: null
})
export class ConfigService {

  private state: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  set tailleH2(value: number) {
    this.state.next(value);
  }

  get tailleH2(): number {
    return this.state.value;
  }

  constructor() { }
}
