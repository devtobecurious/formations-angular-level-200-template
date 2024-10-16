import { HttpClient } from '@angular/common/http';
import { inject, Injectable, isDevMode } from '@angular/core';

export interface ToLog {
  log(message: string, ...optionalParams: any[]): void
}

@Injectable({
  providedIn: 'root'
})
export class ApiLogService implements ToLog {
  private readonly http = inject(HttpClient)

  log(message: string, ...optionalParams: any[]): void {
    this.http.post('api/serilog', { message}).subscribe()
  }
}

@Injectable({
  providedIn: 'root',
  useFactory: () => isDevMode() ? new LogsService() : new ApiLogService()
})
export class LogsService implements ToLog {
  log(message: string, ...optionalParams: any[]): void {
    console.log(message, optionalParams)
  }
}
