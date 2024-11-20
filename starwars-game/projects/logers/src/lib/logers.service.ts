import { Injectable, isDevMode } from '@angular/core';

export type TypeLog = 'info' | 'warning' | 'error'
export type TypeLogOrNumber = TypeLog | number

export interface ToLog {
  log(type: TypeLog, message: string, ...args: unknown[]): void
}

export class ApiLoggerService implements ToLog {
  log(type: TypeLog, message: string, ...args: unknown[]): void {
    throw new Error('Method not implemented.');
  }
  // log(): void {
  //   throw new Error('Method not implemented.');
  // }
}

@Injectable({
  providedIn: 'root',
  useFactory: () => isDevMode() ? new LogersService() : new ApiLoggerService()
})
export class LogersService implements ToLog {
  log(type: TypeLog, message: string, ...args: unknown[]): void {
    if(type === 'info') {
      console.info(message, args)
    } else if(type === 'error') {
      console.error(message, args)
    }
  }

}
