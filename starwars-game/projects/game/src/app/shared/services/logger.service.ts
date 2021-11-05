import { environment } from './../../../../../mobile-game/src/environments/environment';
import { Injectable } from '@angular/core';

export class Logger2  {
  log(message: string, obj ?: any) {
    console.error(message, obj);
  }
}

@Injectable({
  providedIn: 'root',
  // useValue: {
  //   log(message: string, obj ?: any) {
  //     //if (! environment.production) {
  //     //}
  //   }
  // }
  // useClass: Logger2
})
export class LoggerService {

  constructor() { }

  log(message: string, obj ?: any) {
    //if (! environment.production) {
      console.info(message, obj);
    //}
  }
}


