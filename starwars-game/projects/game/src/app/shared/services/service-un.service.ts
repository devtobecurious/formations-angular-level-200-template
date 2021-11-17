import { Injectable } from '@angular/core';

@Injectable({
  providedIn: null // 'root'
})
export class ServiceUnService {
  width: number;

  constructor() {
    console.info('je suis appelé ServiceUnService');
    this.width = Math.random() * 100;
  }
}
