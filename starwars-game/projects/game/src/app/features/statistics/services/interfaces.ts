import { Observable } from "rxjs";
import { Statistics } from "../models";

export interface GetAll<T> {
  /**
   * get all items with query filter
   */
  getAll(filters: { query: string }): Observable<T>
}

export interface GetAllStatistics extends GetAll<Statistics> {
}


