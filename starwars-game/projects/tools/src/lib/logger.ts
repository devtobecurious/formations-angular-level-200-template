import { Injectable, isDevMode } from "@angular/core";
import { Log } from "./models/log";
import { ToLog } from "./to-log";

@Injectable({
  providedIn: 'root'
})
export class ApiLogger implements ToLog {
  log(log: Log, ...args: any[]) {
    fetch('http://localhost:3000/logs', {
      method: 'POST',
      body: JSON.stringify(log)
    })
  }
}

@Injectable({
    providedIn: 'root',
    useFactory: () => !isDevMode() ? new ApiLogger() : new Logger()
})
export class Logger implements ToLog {
    log(log: Log, ...args: any[]) {
      if(log.level === 'info') {
        console.log(`[${log.level}] ${log.message}`, ...args)
      } else if(log.level === 'debug') {
        console.debug(`[${log.level}] ${log.message}`, ...args)
      } else if(log.level === 'error') {
        console.error(`[${log.level}] ${log.message}`, ...args)
      }
    }
}
