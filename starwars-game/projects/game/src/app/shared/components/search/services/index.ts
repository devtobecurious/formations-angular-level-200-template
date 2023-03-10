import { Injectable } from "@angular/core";
import { SearchItem } from "../models";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private store = new BehaviorSubject<SearchItem>({ value: '' });

  search(item: SearchItem): void {
    this.store.next(item);
  }

  get asObservable(): Observable<SearchItem> {
    return this.store.asObservable();
  }

  get lastValue(): string {
    return this.store.value.value;
  }
}
