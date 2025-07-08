import { TestBed } from '@angular/core/testing';

import { GetListStatsService } from './get-list-stats.service';

describe('GetListStatsService', () => {
  let service: GetListStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
