import { TestBed } from '@angular/core/testing';

import { GetAllStatsInfraService } from './get-all-stats.infra.service';

describe('GetAllStatsInfraService', () => {
  let service: GetAllStatsInfraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllStatsInfraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
