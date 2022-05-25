import { Injectable } from '@angular/core';

const value = {
  id: 'grid-config'
}

@Injectable({
  providedIn: 'root',
  useValue: value
})
export class GridConfigService {
  id !: string;

  constructor() {
    this.id = (Math.random() * 100).toString();
    console.info('GridConfigService.constructor()', this.id);
  }
}
