import { Observable } from "rxjs";

export interface GetAll<T> {
  getAll(filter: string): Observable<T[]>
}
