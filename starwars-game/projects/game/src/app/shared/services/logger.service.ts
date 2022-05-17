import { Injectable } from '@angular/core';
import { environment } from 'projects/game/src/environments/environment';

export class ConsoleLoggerService  {
  log(message: string, ...optionalParams: any[]) {
    console.log(message, optionalParams);
  }
}

@Injectable({
  providedIn: 'root',
  //useClass: environment.production ? LoggerService : ConsoleLoggerService,
  // useValue: { log(message: string, ...optionalParams: any[]) {} }
  //useFactory: () => { return environment.production ? { log() {} } : new LoggerService(); }

})
export class LoggerService {

  constructor() { }

  log(message: string, ...optionalParams: any[]) {
    // appel de l'api de log
  }
}



