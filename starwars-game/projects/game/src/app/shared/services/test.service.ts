import { Injectable } from '@angular/core';

@Injectable({
  providedIn: null
  //providedIn: 'root'
})
export class TestService {

  key: number = 0;

  constructor() {
    console.info('TestService : je me crée');
    this.key = (Math.random() * 100);
  }
}
