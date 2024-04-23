import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Statistics } from "../models";
import { StatisticsInfrastructure } from "./statistics.infrastructure";

@Injectable({providedIn: 'root'})
export class StatisticsApplication {
  private readonly infra = inject(StatisticsInfrastructure);

  getAll(): Observable<Statistics> {
    return this.infra.getAll();
  }
}
