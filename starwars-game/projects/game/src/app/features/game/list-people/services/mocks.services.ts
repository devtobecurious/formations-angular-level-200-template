import { Observable, of } from "rxjs"
import { Person } from "../models"

export const fakeGetAllPeopleService = {
  getAll(): Observable<Person[]> {
    return of([{id: 1, surname: 'test'}, {id: 2, surname: 'test 2'}])
  }
}
