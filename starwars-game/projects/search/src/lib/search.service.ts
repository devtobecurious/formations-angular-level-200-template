import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const value = {
  valeur: ''
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly store = new BehaviorSubject<any>({});


  dispatch(value: any): void {
    this.store.next(value);
  }

  get asObservable(): Observable<any> {
    return this.store.asObservable();
  }

  // set asObservable(value: Observable<any>) {

  // }
}
