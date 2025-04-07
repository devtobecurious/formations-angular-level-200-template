import { TestBed } from '@angular/core/testing';

import { TestServ } from './test-serv';

describe('TestServ', () => {
  let service: TestServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
