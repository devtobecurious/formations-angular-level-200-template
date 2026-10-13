import { Service } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { StormTrooper } from '../models/storm-trooper';

@Service() // identique à provided in root => singleton
export class GetListSts {
    getAll(): Observable<StormTrooper[]> {
        return of([
            { id: 1, matricule: 'XD10', color: 'red' },
            { id: 1, matricule: 'VDSE810', color: 255 }
        ]).pipe(delay(1000))
    }
}
