import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, retry, shareReplay } from "rxjs";
import { Statistics } from "../../models/statistic";

@Injectable({
  providedIn: null,
})
export class GetAllStatsFromApi {
  private readonly http = inject(HttpClient);
  private readonly stats$ = this.http.get<Statistics>('api/statistics').pipe(
    retry(2),
    shareReplay(1)
  );

  getAll(): Observable<Statistics> {
    return this.stats$;
  }
}
