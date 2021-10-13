import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public state = new BehaviorSubject('');

  constructor() { }

  search(value: string) {
    this.state.next(value);
  }
}
