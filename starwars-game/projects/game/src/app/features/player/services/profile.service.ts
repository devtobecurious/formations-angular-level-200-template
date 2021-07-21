import { Injectable } from '@angular/core';

let idService = 0;

@Injectable()
export class ProfileService {

  constructor() {
    console.info('ProfileService', idService++);
  }
}
