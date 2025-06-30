import { TestBed } from '@angular/core/testing';

import { TestSearchService } from './test-search.service';

describe('TestSearchService', () => {
  let service: TestSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
