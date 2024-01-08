import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Countries, Country } from '../models';
import { BaseStore } from '../../shared/core/services';
@Injectable({ providedIn: 'root' })
export class CountriesStore extends BaseStore<Country> { }
