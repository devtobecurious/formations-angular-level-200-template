import { inject, Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { ApplicationState } from "../../../reducers";
import { filter, Observable } from "rxjs";
import { Statistic } from "../models";
import { selectAllItemsFromCurrentYearSelector, selectAllItemsSelector, selectNbItemsSelector } from "../store/statistics.selectors";
import { requestAllStatisticsToApi } from "../store/statistics.actions";

@Injectable({providedIn: 'root'})
export class StatisticsBusiness {
  private readonly store = inject(Store<ApplicationState>);

  init(): void {
    this.store.dispatch(requestAllStatisticsToApi());
  }

  getAll(): Observable<Statistic[]> {
    return this.store.pipe(
      select(selectAllItemsFromCurrentYearSelector)
    )
  }

  getNbItems(): Observable<number> {
    return this.store.pipe(
      select(selectNbItemsSelector)
    )
  }
}
