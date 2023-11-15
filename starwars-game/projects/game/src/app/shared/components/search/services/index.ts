import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { WithValue } from "../models";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class SearchStoreService {
  private store = new BehaviorSubject<WithValue>({value: ''}); // Gestionnaire d'état

  save(value: WithValue): void {
    this.store.next(value);
  }

  get asObservable(): Observable<WithValue> {
    return this.store.asObservable();
  }
}
