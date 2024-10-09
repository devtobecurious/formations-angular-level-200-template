import { computed, inject, Injectable } from "@angular/core";
import { Observable, switchMap } from "rxjs";
import { Statistics } from "../models";
import { SearchService } from "search-lib";
import { toSignal } from "@angular/core/rxjs-interop";
import { select, Store } from "@ngrx/store";
import { addStatListAction } from "../store/stats.actions";
import { StatisticsInfrastructure } from "./statistics-infrastructure";
// import { selectAllStats } from "../store/stats.selectors";

@Injectable({providedIn: 'root'})
export class StatisticsBusiness {
   private readonly infra = inject(StatisticsInfrastructure)
  private readonly search = inject(SearchService)
  private readonly store = inject(Store)
  private readonly getAll$ = this.infra.getAll() // pas d'appel api ici ;)
  // private readonly getAll$ = this.store.pipe(select(selectAllStats))
  private getAll$$ = toSignal(this.getAll())

  initialize(): void {
    const items: Statistics = [
      {month: 5, year: 2024, nbFailed: 0, nbSuccess: 5},
      {month: 7, year: 2024, nbFailed: 3, nbSuccess: 0},
    ]
    this.store.dispatch(addStatListAction({items}))
  }

  getAll(): Observable<Statistics> {
     // ne doit pas me soucier du comment je récup les données
    return this.search.asObservable.pipe(
      switchMap(search => this.getAll$)
    )
  }

  get toSignal() {
    return this.getAll$$
  }

  get statsOfTheYear() {
    return computed(() => this.toSignal()?.filter(item => item.year === (new Date()).getFullYear()))
  }
}
