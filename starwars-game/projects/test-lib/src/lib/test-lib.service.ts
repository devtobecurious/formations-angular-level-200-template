import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface StateStoreService {
  isDone(): Observable<boolean>;
}
