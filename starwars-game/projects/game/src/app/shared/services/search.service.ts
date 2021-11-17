import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public state = new BehaviorSubject('');

  constructor() { }

  search(item: string) {
    this.state.next(item);
  }
}
