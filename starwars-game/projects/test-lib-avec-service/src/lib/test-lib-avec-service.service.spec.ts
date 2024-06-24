import { TestBed } from '@angular/core/testing';

import { TestLibAvecServiceService } from './test-lib-avec-service.service';

describe('TestLibAvecServiceService', () => {
  let service: TestLibAvecServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestLibAvecServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
