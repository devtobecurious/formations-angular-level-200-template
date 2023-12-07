import { Injectable, inject } from "@angular/core";
import { Observable, catchError, map, of } from "rxjs";
import { StatisticListState } from "../models";
import { StatisticsInfra, createInfra } from "./statistics.infrastructure";



@Injectable({
  providedIn: 'root'
})
export class StatisticsApplication {
  private readonly infra = createInfra().stats;

  getAll(): Observable<StatisticListState> {
    return this.infra.getAll().pipe(
      map(items => ({ items, state: 'loaded' })),
      //catchError(err => of({items: undefined, state: 'onError'}))
    )
  }
}
