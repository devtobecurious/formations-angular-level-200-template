import { TestBed } from '@angular/core/testing';

import { StatisticDataService } from './statistic-data.service';

describe('StatisticDataService', () => {
  let service: StatisticDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatisticDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
