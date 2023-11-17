import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { Stats } from "../models";

@Injectable({providedIn: 'root'})
export class StatsApp {
  getAll(): Observable<Stats> {
     const items: Stats = [
      { annee: 2023, mois: 3, nbPartiesGagnees: 0, nbPartiesPerdues: 20 },
      { annee: 2022, mois: 4, nbPartiesGagnees: 10, nbPartiesPerdues: 40 }
    ]
    return of(items).pipe(delay(1000))
  }
}
