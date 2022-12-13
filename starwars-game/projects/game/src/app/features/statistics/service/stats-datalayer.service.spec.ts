import { TestBed } from '@angular/core/testing';

import { StatsDatalayerService } from './stats-datalayer.service';

describe('StatsDatalayerService', () => {
  let service: StatsDatalayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatsDatalayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
