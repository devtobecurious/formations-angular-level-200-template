import { HttpClient } from '@angular/common/http';
import { inject, Injectable, isDevMode } from '@angular/core';

export interface ToLog {
  log(message: string): void
}

@Injectable()
export class ApiLoggerService implements ToLog {
  private readonly http = inject(HttpClient)

  log(message: string): void {
    this.http.post('api/log', { item: message }).subscribe()
  }
}

@Injectable({
  providedIn: 'root',
  useFactory: () => isDevMode() ? new ConsoleLoggerService() : new ApiLoggerService()
})
export class ConsoleLoggerService implements ToLog {

  log(message: string): void {
    console.info(message)
  }
}
