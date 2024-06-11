import { Observable } from "rxjs";
import { Planets } from "../models";
import { inject, Injectable } from "@angular/core";
import { PlanetsInfrastructure } from "./planets.infrastructure";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Injectable({providedIn: 'root'})
export class PlanetsApplication {
  private readonly infra = inject(PlanetsInfrastructure)

  getAll(): Observable<Planets> {
    return this.infra.getAll().pipe(
      takeUntilDestroyed()
    )
  }
}
