import { TestBed } from '@angular/core/testing';

import { PeopleInfraService } from './people-infra.service';

describe('PeopleInfraService', () => {
  let service: PeopleInfraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleInfraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
