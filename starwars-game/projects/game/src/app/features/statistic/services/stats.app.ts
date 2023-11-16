import { Injectable, inject } from "@angular/core";
import { StatsInfra } from "./stats.infra";
import { Observable, concatMap, delay, distinctUntilChanged, share, shareReplay } from "rxjs";
import { Stats } from "../models";
import { SearchStoreService } from "../../../shared/components/search/services";

@Injectable({
  providedIn: 'root'
})
export class StatsApp {
  private infra = inject(StatsInfra);
  private searchStore = inject(SearchStoreService);
  private monObs$ :Observable<Stats> | undefined;

  getAll(): Observable<Stats> {
    if (typeof this.monObs$ === 'undefined') {
      this.monObs$ = this.searchStore.asObservable.pipe(
        distinctUntilChanged(),
        concatMap(search => this.infra.getAll()),
        shareReplay() // memoization
      )
    }

    return this.monObs$;
  }
}
