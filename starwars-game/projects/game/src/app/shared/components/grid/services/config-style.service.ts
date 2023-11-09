import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: null
})
export class ConfigStyleService {
  store = new BehaviorSubject<{h1: number}>({h1: 10});
}
