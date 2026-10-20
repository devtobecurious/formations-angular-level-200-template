import { TestBed } from '@angular/core/testing';
import { GetAllPeopleBusiness } from './get-all-people.business';
import { GetAllPeople } from './get-all-people';
import { Observable, of } from 'rxjs';
import { PeopleAPiResult } from '../models/character';

const mock = {
  getAll(): Observable<PeopleAPiResult> {
    return of({ results: [ {name: '', url: 'https://swapi.dev/api/people/1/', height: 100}]})
  }
}

describe('GetAllPeopleBusiness', () => {
  let service: GetAllPeopleBusiness;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: GetAllPeople, useValue: mock },
        GetAllPeopleBusiness
      ]
    });
    service = TestBed.inject(GetAllPeopleBusiness);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it.only('should get empty array', () => {
    const array = service.getAll()();

    expect(array).toBeTruthy();
    expect(array.length).toBe(1);

    expect(array[0].id).toBe(1)
  })
});
