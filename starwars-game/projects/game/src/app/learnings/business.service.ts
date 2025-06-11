import { inject, Injectable } from '@angular/core';
import { RawDataService } from './raw-data.service';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  private readonly raw = inject(RawDataService)

  protected chatBetter$ = this.raw.getOne().pipe(
    tap(item => console.info(item)), // s'exécute lors du next
    map(item => item.toUpperCase()), // s'exécute lors du next
    map(item => item.charAt(1))
  )

  getOne(): Observable<string> {
    return this.chatBetter$
  }
}
