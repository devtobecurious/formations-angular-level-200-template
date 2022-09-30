import { Injectable } from '@angular/core';
import { environment } from 'projects/game/src/environments/environment';

export type ToLog = (message: string, ...params: any[]) => void;

export interface ToLogInterface {
  log(message: string, ...params: any[]): void;
}

@Injectable({
  providedIn: 'root'
})
export class LoggerApiService implements ToLogInterface {

  constructor() { }

  log(message: string, ...params: any[]): void {
    throw new Error('Method not implemented.');
  }
}

const maFactory = () => { return environment.production ? new LoggerApiService() : new LoggerService() };

@Injectable({
  providedIn: 'root',
  useFactory: maFactory
})
export class LoggerService implements ToLogInterface {

  constructor() { }

  log(message: string, ...params: any[]): void {
    console.info(message, params);
  }
}
