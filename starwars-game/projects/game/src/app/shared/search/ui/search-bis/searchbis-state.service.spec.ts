import { TestBed } from '@angular/core/testing';

import { SearchbisStateService } from '../../../ui/search-bis/searchbis-state.service';

describe('SearchbisStateService', () => {
  let service: SearchbisStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchbisStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
