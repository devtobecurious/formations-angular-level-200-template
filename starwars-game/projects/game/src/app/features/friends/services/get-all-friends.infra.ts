import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { Friends } from "../models";

@Injectable({ providedIn: 'root'})
export class GetAllFriendsInfra {
  private readonly http = inject(HttpClient)

  getAll(): Observable<Friends> {
    // return this.http.get<Friends>('');
    const result: Friends = [
      {name: 'Ami 1'},
      {name: 'Ami 2', friends: [ { name: 'Ami 3'}]}
    ];

    return of(result).pipe(delay(1500));
  }
}
