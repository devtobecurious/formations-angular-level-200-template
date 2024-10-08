import { computed, inject, Injectable } from "@angular/core";
import { Observable, switchMap } from "rxjs";
import { Statistics } from "../models";
import { StatisticsInfrastructure } from "./statistics-infrastructure";
import { SearchService } from "search-lib";
import { toSignal } from "@angular/core/rxjs-interop";

@Injectable({providedIn: 'root'})
export class StatisticsBusiness {
  private readonly infra = inject(StatisticsInfrastructure)
  private readonly search = inject(SearchService)
  private readonly getAll$ = this.infra.getAll() // pas d'appel api ici ;)

  getAll(): Observable<Statistics> {
     // ne doit pas me soucier du comment je récup les données
    return this.search.asObservable.pipe(
      switchMap(search => this.getAll$)
    )
  }

  get toSignal() {
    return toSignal(this.getAll())
  }

  get statsOfTheYear() {
    return computed(() => this.toSignal()?.filter(item => item.year === (new Date()).getFullYear()))
  }
}
