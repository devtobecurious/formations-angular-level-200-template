import { TestBed } from '@angular/core/testing';

import { SeaechStateService } from './search.service';

describe('SearchService', () => {
  let service: SeaechStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeaechStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
