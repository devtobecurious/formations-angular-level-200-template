import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/game/src/environments/environment';

export interface Logger {
  log(message: string, ...params: any[]): void;
}

export class ApiLoggerService implements Logger {
  constructor(private http: HttpClient) {}

  log(message: string, ...params: any[]): void {
    // appel de l'api
    fetch('monurldapi');
  }
}

export const maFactoryDeLog = (http: HttpClient) => environment.production ? new ApiLoggerService(http) :
                                                                             new LoggerService();

@Injectable({
  providedIn: 'root',
  useFactory: maFactoryDeLog
})
export class LoggerService implements Logger {

  constructor() { }

  log(message: string, ...params: any[]): void {
    console.info(message, params);
  }
}
