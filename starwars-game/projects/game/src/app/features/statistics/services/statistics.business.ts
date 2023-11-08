import { Injectable, inject } from "@angular/core";
import { GetAllStatistics } from "./interfaces";
import { Observable, switchMap } from "rxjs";
import { Statistics } from "../models";
import { StatisticsDataLayer } from "./statistics.datalayer";
import { SearchBusService } from "../../../shared/components/search/services/search-bus.service";


@Injectable({
  providedIn: 'root'
})
export class StatisticsBusiness {
  private layer = inject(StatisticsDataLayer);
  private searchStore = inject(SearchBusService);

  getAll(): Observable<Statistics> {
    return this.searchStore.asObservable.pipe(
      switchMap(search => this.layer.getAll({query: search.value}))
    );
  }
}
