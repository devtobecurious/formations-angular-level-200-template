import { TestBed } from '@angular/core/testing';

import { SelectPeopleService } from './select-people.service';

describe('SelectPeopleService', () => {
  let service: SelectPeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectPeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
