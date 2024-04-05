import { Injectable } from "@angular/core";
import { Observable, shareReplay } from "rxjs";

@Injectable({ providedIn: 'root' })
export class TitreService {
  private obs$ = new Observable<string>(observer => {
    console.info('=> Appel de mon observable');
    observer.next('Il était une fois');
    setTimeout(() => {
      observer.next('Dans une lointaine galaxie');
      observer.complete();
    }, 1000);
  }).pipe(
    // shareReplay(2)
  );

  getTitre(): Observable<string>{
     return this.obs$
  }
}
