import { inject, Injectable } from "@angular/core";
import { catchError, filter, Observable, of, switchMap } from "rxjs";
import { Statistics } from "../models/statistics";
import { StatisticsInfrastructure } from "./statistics.infrastructure";
import { SearchService } from "search";


@Injectable({ providedIn: 'root' })
export class StatisticsApplication {
  private readonly infra = inject(StatisticsInfrastructure)
  private readonly searchService = inject(SearchService)

  getAll(): Observable<Statistics> {
    return this.searchService.asObservable().pipe(
      filter(searchState => searchState.value !== ''), // On filtre pour éviter d'avoir une recherche avec un filtre vide
      switchMap(searchState => {
        return this.infra.getAll(searchState.value)
      }),
      // catchError(err => this.monEtat.next(error=))
    );
  }
}
