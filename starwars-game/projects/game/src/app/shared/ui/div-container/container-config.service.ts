import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ContainerConfigService {
  public configState = new BehaviorSubject<number>(20);

  constructor() { }
}
