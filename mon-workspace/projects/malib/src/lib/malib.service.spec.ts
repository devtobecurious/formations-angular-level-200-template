import { TestBed } from '@angular/core/testing';

import { MalibService } from './malib.service';

describe('MalibService', () => {
  let service: MalibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MalibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
