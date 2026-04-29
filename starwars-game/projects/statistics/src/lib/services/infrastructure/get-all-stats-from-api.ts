import { HttpClient } from "@angular/common/http";
import { inject, Injectable, isDevMode } from "@angular/core";
import { delay, Observable, of, retry, shareReplay } from "rxjs";
import { Statistics } from "../../models/statistic";

@Injectable()
export class FakeGetAllStatsFromApi {
  getAll(): Observable<Statistics> {
    const fakeData: Statistics = [
      { year: 2023, month: 1, nbSuccesses: 10, nbFails: 5 },
      { year: 2023, month: 2, nbSuccesses: 20, nbFails: 10 },
      { year: 2023, month: 3, nbSuccesses: 15, nbFails: 5 }
    ];

    return of(fakeData).pipe(delay(1000));
  }
}

const fakeService = new FakeGetAllStatsFromApi();

@Injectable({
  providedIn: null,
  // useValue: fakeService
  useFactory: () => isDevMode() ? fakeService : new GetAllStatsFromApi(),
  deps: [HttpClient]
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
