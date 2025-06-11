import { TestBed } from '@angular/core/testing';

import { RawDataService } from './raw-data.service';

describe('RawDataService', () => {
  let service: RawDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RawDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
