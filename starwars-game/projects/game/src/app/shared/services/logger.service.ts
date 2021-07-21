import { Injectable } from '@angular/core';
import { environment } from 'projects/game/src/environments/environment';



@Injectable({
  providedIn: 'root',
  useFactory: () => environment.production ? LoggerService: NoLoggerService
})
export class LoggerService {

  constructor() { }

  log(message: string) {
    console.info(message);
  }
}

class NoLoggerService extends LoggerService {
  log(message: string) {
  }
}
