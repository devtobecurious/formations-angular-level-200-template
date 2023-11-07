import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "projects/game/src/environments/environment";

export interface LogOne {
  log(mess: string): void;
}

export class ConsoleLoggerService implements LogOne {
  log(mess: string): void {
    console.info(mess);
  }

}

export const factoryLogger = () => environment.production ? new LoggerService() : new ConsoleLoggerService();

@Injectable({
  providedIn: 'root',
  useFactory: factoryLogger
})
export class LoggerService implements LogOne {
  private httpClient = inject(HttpClient);

  log(mess: string): void {
    this.httpClient.post('monurl', {data: mess}).subscribe(); // un approche optimiste : pas grave si ça fonctionne pas
  }

}
