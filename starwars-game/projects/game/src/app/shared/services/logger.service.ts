import { Injectable } from '@angular/core';
import { environment } from 'projects/game/src/environments/environment';

const fakeLog = {
  log(message: string, ...optionals: any[]): void {
    console.error('Oula une erreur');
  }
}

const apiLog = {
  log(message: string, ...optionals: any[]): void {
    console.error('J\'appelle mon api de log en prod');
  }
}

// @Injectable({
//   providedIn: null,
//   // useValue: fakeLog,
//   useFactory: () => environment.production ? apiLog: new LoggerService()
// })
@Injectable()
export class LoggerService {

  constructor() {
    this.log('LoggerService => construct');
  }

  log(message: string, ...optionals: any[]): void {
    console.info(message, optionals);
  }
}
