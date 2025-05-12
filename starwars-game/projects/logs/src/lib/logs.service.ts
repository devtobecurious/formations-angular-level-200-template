import { Injectable } from '@angular/core';

export type LogLevel = 'info' | 'warn' | 'error' | 'debug' | 'trace' | 'verbose' | 'silent';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  log(message: string, level: LogLevel): void {
    switch(level) {
      case 'info':
        console.log(message);
        break;
      case 'warn':
        console.warn(message);
        break;
      case 'error':
        console.error(message);
        break;
      case 'debug':
        console.debug(message);
        break;
      case 'trace':
        console.trace(message);
        break;
      case 'silent':
        break;
      default:
        console.log(message);
        break;
    }
  }
}
