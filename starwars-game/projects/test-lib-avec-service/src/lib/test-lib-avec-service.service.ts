import { Injectable } from '@angular/core';
import { StateStoreService } from 'projects/test-lib/src/public-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestLibAvecServiceService implements StateStoreService {

  constructor() { }

  isDone(): Observable<boolean> {
    throw new Error('Method not implemented.');
  }
}
