import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/game/src/environments/environment';

export interface Log {
  log(message: string, ...optionalParams: any[]): void;
}

export class ApiLoggerService implements Log {
  constructor(private http: HttpClient) { }

  log(message: string, ...optionalParams: any[]): void {
    console.warn('ApiLoggerService: ' + message);
  }
}

@Injectable({
  providedIn: 'root',
  useClass: environment.production ? ApiLoggerService : LoggerService
  // useFactory: () => { return environment.production ? new ApiLoggerService() : new LoggerService();}
})
export class LoggerService implements Log {

  constructor() { }

  log(message: string, ...optionalParams: any[]): void {
    console.log(message, optionalParams);
  }
}
