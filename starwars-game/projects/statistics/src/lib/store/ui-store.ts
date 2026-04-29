import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DataLoadingState, initialDataLoadingState } from "./data-loading-state";

@Injectable({
  providedIn: 'root'
})
export class UiStore {
  private readonly store = new BehaviorSubject<DataLoadingState>(initialDataLoadingState);

  dispatch(newState: DataLoadingState) {
    this.store.next({ ...newState });
  }

  get data$() {
    return this.store.asObservable();
  }
}
