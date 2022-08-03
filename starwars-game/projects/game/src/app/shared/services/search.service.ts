import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoggerService } from './logger.service';

const fakeService = {
  store: new BehaviorSubject<string>(''),

  search(term: string) {
    console.info('je fake ');
  }
}

class FakeSearchService  {
  search(term: string) {
    console.info('je fake ');
  }
}

@Injectable({
  providedIn: 'root',
  // useValue: fakeService
  // useClass: FakeSearchService
  // useFactory: () => { return new SearchService();}
})
export class SearchService {
  public store = new BehaviorSubject<string>('');

  constructor(private log: LoggerService) { }

  search(item: string) {
    this.log.log('je log ', item);
    this.store.next(item);
  }
}
