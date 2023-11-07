import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { SearchItemDTO } from "../models";

@Injectable({
  providedIn: 'root' // Est-ce vraiment bien ???
})
export class SearchBusService { // Tree shaking
  private state = new BehaviorSubject<SearchItemDTO>({value: ''});

  /**
   *
   * @param item
   */
  save(item: SearchItemDTO): void {
    this.state.next(item);
  }

  get asObservable(): Observable<SearchItemDTO> {
    return this.state.asObservable();
  }
}
