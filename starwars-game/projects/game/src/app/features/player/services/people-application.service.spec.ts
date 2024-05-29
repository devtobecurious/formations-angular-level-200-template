import { TestBed } from '@angular/core/testing';

import { PeopleApplicationService } from './people-application.service';

describe('PeopleApplicationService', () => {
  let service: PeopleApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
