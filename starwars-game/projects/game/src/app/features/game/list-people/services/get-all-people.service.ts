import { Observable, of } from "rxjs";
import { Person } from "../models";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GetAllPeopleService {
  getAll(): Observable<Person[]> {
    throw new Error('Not implemented exception')
  }
}
