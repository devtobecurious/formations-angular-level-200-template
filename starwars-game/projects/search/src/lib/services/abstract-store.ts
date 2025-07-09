import { BehaviorSubject, debounceTime, filter } from "rxjs";

export abstract class AbstractStoreService<T> {
  private readonly store$ = new BehaviorSubject<T | undefined>(undefined);

  dispatch(value: T) {
    this.store$.next(value);
  }

  get asObservable() {
    return this.store$.asObservable()
    .pipe(
      debounceTime(200)
    )
  }
}
