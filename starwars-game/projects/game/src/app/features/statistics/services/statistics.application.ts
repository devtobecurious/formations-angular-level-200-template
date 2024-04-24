import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Statistics } from "../models";
import { StatisticsInfrastructure } from "./statistics.infrastructure";
import { select, Store } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";
import { selectAllStats, selectAllStatsSuccess } from "../store/statistics.selectors";

@Injectable({providedIn: 'root'})
export class StatisticsApplication {
  private readonly store = inject(Store<ApplicationState>);
  // private readonly infra = inject(StatisticsInfrastructure);

  getAll(): Observable<Statistics> {
    // return this.infra.getAll();
    return this.store.pipe(select(selectAllStatsSuccess))
  }
}
