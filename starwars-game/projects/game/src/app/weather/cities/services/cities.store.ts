import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Cities, City } from "../models";
import { BaseStore } from "../../shared/core/services";

@Injectable({ providedIn: 'root' })
export class CitiesStore extends BaseStore<City> { }
