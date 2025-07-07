import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AbstractStoreService } from './abstract-store';
import { SearchState } from '../store';


@Injectable({
  providedIn: 'root'
})
export class SearchStoreService extends AbstractStoreService<SearchState> {
}
